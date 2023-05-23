---
title: Encore clients in Next.js
lead: The dream of typesafe contracts.
publishedAt: 2023-05-23T08:08:03.319Z
---

The combination of [Encore](https://encore.dev) and
[Next.js 13](https://nextjs.org/blog/next-13)'s `app` directory is becoming a
hugely productive combination for me.
[Fetching data in server-side rendered components](https://beta.nextjs.org/docs/data-fetching/fetching)
on Next.js is a dream when combined with Encore's
[TypeScript client generation](https://encore.dev/docs/develop/client-generation).

I've found a few helpful additions to the generated client can make the whole
experience a bit more comfortable. For context, here's what initialising a
client (for local testing) looks like:

```typescript
// lib/client.ts
import Client, { Local } from "@/lib/client.gen";

const client = new Client(Local);
export default client;
```

## Grouping SSR requests

The generated client already offers you a way to modify the way requests are
called: providing a custom `fetcher`.

```typescript
// A fetcher is the prototype for the inbuilt Fetch function
export type Fetcher = typeof fetch;
```

So as long as it has the same signature as the
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), we can
use it.

Here's what it would look like to wrap `fetch` so we can add a custom header:

```typescript
// lib/client.ts
import Client, { Fetcher, Local } from "@/lib/client.gen";

const fetcher: Fetcher = (input, init = {}) => {
  const headers = new Headers(init.headers);
  headers.append("X-Example-Header", "value");

  return fetch(input, { ...init, headers });
};

const client = new Client(Local, { fetcher });
export default client;
```

With
[Encore's schema definitions](https://encore.dev/docs/develop/api-schemas#headers)
though, any headers required for a particular request should already be expected
as part of the client's params. So generally this isn't helpful for individual
requests.

There's one header that Encore makes use of that I've found helpful here though:
`X-Request-ID`.

With
[Encore `v1.11.0`](https://github.com/encoredev/encore/releases/tag/v1.11.0) it
became possible to filter traces based on various criteria. Most are already
provided by Encore: `Duration`, `User ID`, `Trace ID`. `X-Request-ID` allows
filtering on an externally defined request ID set as a header.

So here's what I'm doing: group requests made by Next.js when server-rendering
pages by providing a consistent `X-Request-ID` per request.

```typescript
// lib/client.ts
import Client, { Fetcher, Local } from "@/lib/client.gen";
import { nanoid } from "nanoid/non-secure";
import { cache } from "react";

/**
 * Generate a random string to be used as a request ID.
 *
 * Result is cached for the duration of a single request.
 */
export const useRequestID = cache(nanoid);

/**
 * Retrieve a configured client.
 *
 * Result is cached for the duration of a single request.
 */
export const useClient = cache(() => {
  const requestID = useRequestID();

  const fetcher: Fetcher = (input, init = {}) => {
    const headers = new Headers(init.headers);
    headers.append("X-Request-ID", requestID);

    return fetch(input, { ...init, headers });
  };

  return new Client(Local, { fetcher });
});
```

The trick here is the `cache` function, which can be used for
[per-request caching](https://beta.nextjs.org/docs/data-fetching/caching#per-request-caching).

> You can use `cache()` to deduplicate data fetches on a **per-request basis**.
> If a function instance with the same arguments has been called before,
> anywhere in the server request, then we can return a cached value.

Note that it says: "same arguments". So we can provide a function that
optionally takes our authentication params:

```typescript
// lib/client.ts
import Client, { ClientOptions, Fetcher, Local } from "@/lib/client.gen";
import { nanoid } from "nanoid/non-secure";
import { cache } from "react";

/**
 * Generate a random string to be used as a request ID.
 *
 * Result is cached for the duration of a single request.
 */
export const useRequestID = cache(nanoid);

/**
 * Retrieve a configured client.
 *
 * Result is cached for the duration of a single request.
 */
export const useClient = cache((auth?: ClientOptions["auth"]) => {
  const requestID = useRequestID();

  const fetcher: Fetcher = (input, init = {}) => {
    const headers = new Headers(init.headers);
    headers.append("X-Request-ID", requestID);

    return fetch(input, { ...init, headers });
  };

  return new Client(Local, { fetcher, auth });
});
```

Every time we call `useClient` without the authentication params then we get the
same anonymous client. And calling it _with_ the authentication params gives us
the same authenticated client.

As `useRequestID` is also cached, both clients will have the same `X-Request-ID`
header and it will be simple to identify all the requests involved in rendering
a single page regardless of whether they were made with or without a user's
credentials.
