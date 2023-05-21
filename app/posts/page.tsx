import { allPosts } from "contentlayer/generated";
import { Time } from "@/components/Time";
import Link from "next/link";

export default function PostsPage() {
  return (
    <article>
      <hgroup>
        <h1>Posts</h1>
        <p className="lead">Nonsense from John Bannister.</p>
      </hgroup>

      <ul>
        {allPosts.map((post) => (
          <li key={post._id}>
            <article>
              <h2 className="mb-3xs">
                <Link href={post.path}>{post.title}</Link>
              </h2>
              <p className="lead text-0">{post.lead}</p>
              <dl className="-text-1 italic cluster gap-3xs mt-3xs">
                <dt>Published:</dt>
                <dd>
                  <Time dateTime={post.publishedAt} />
                </dd>
              </dl>
            </article>
          </li>
        ))}
      </ul>
    </article>
  );
}
