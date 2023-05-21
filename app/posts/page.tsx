import { Time } from "@/components/Time";
import Link from "next/link";

export default function PostsPage() {
  const publishedAt = new Date();

  return (
    <article>
      <hgroup>
        <h1>Posts</h1>
        <p className="lead">Nonsense from John Bannister.</p>
      </hgroup>

      <ul>
        <li>
          <article>
            <h2 className="mb-3xs">
              <Link href="/posts/some-slug">Post title</Link>
            </h2>
            <p className="lead text-0">The lead line for the post is shown.</p>
            <dl className="-text-1 italic cluster gap-3xs mt-3xs">
              <dt>Published:</dt>
              <dd>
                <Time dateTime={publishedAt} />
              </dd>
            </dl>
          </article>
        </li>
        <li>
          <article>
            <h2 className="mb-3xs">
              <Link href="/posts/some-slug">Post title</Link>
            </h2>
            <p className="lead text-0">The lead line for the post is shown.</p>
            <dl className="-text-1 italic cluster gap-3xs mt-3xs">
              <dt>Published:</dt>
              <dd>
                <Time dateTime={publishedAt} />
              </dd>
            </dl>
          </article>
        </li>
        <li>
          <article>
            <h2 className="mb-3xs">
              <Link href="/posts/some-slug">Post title</Link>
            </h2>
            <p className="lead text-0">The lead line for the post is shown.</p>
            <dl className="-text-1 italic cluster gap-3xs mt-3xs">
              <dt>Published:</dt>
              <dd>
                <Time dateTime={publishedAt} />
              </dd>
            </dl>
          </article>
        </li>
      </ul>
    </article>
  );
}
