import { feed } from "@/app/posts/feed/feed";

export async function GET() {
  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
