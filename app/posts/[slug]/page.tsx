import { Time } from "@/components/Time";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  return (
    <article>
      <hgroup>
        <h1>{post.title}</h1>
        <p className="lead">{post.lead}</p>
        <dl className="-text-1 italic cluster gap-3xs mt-3xs">
          <dt>Published:</dt>
          <dd>
            <Time dateTime={post.publishedAt} />
          </dd>
        </dl>
      </hgroup>

      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
}
