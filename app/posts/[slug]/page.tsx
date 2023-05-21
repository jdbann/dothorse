import { Time } from "@/components/Time";

export default function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const publishedAt = new Date();

  return (
    <article>
      <hgroup>
        <h1>Post title</h1>
        <p className="lead">The lead line for the post is shown.</p>
        <dl className="-text-1 italic cluster gap-3xs mt-3xs">
          <dt>Published:</dt>
          <dd>
            <Time dateTime={publishedAt} />
          </dd>
        </dl>
      </hgroup>

      <p>
        And then we will the rest of the page with the actual contents of the
        post.
      </p>
    </article>
  );
}
