import { Feed } from "feed";
import { allPosts } from "contentlayer/generated";

export const feed = new Feed({
  title: "emailaddress.horse",
  id: "https://emailaddress.horse/posts",
  link: "https://emailaddress.horse/posts",
  copyright: "All content © John Bannister 2024",
});

allPosts
  .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
  .forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `https://emailaddress.horse/posts/${post.slug}`,
      link: `https://emailaddress.horse/posts/${post.slug}`,
      content: post.body.html,
      date: new Date(post.publishedAt),
    });
  });
