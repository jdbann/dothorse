import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypeShiki from "@stefanprobst/rehype-shiki";
import * as shiki from "shiki";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    lead: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource(async () => {
  const highlighter = await shiki.getHighlighter({ theme: "css-variables" });
  return {
    contentDirPath: "content/posts",
    documentTypes: [Post],
    markdown: {
      rehypePlugins: [[rehypeShiki, { highlighter }]],
    },
  };
});
