import { Time } from "@/components/Time";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

function findPost({ params: { slug } }: Props) {
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) notFound();

  return post;
}

export function generateMetadata(props: Props) {
  const post = findPost(props)!;

  return { title: post.title, description: post.lead };
}

export function generateStaticParams(): Props["params"][] {
  return allPosts.map(({ slug }) => ({ slug }));
}

export default function PostPage(props: Props) {
  const post = findPost(props);

  return (
    <article>
      <hgroup>
        <h1>{post.title}</h1>
        <p className="lead leading-normal">{post.lead}</p>
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
