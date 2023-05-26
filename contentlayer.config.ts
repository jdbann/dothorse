import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import remarkTextr from "remark-textr";
import rehypeShiki from "@stefanprobst/rehype-shiki";
import * as shiki from "shiki";
import typographicTransformations from "./lib/typographicTransformations";

export const Home = defineDocumentType(() => ({
  name: "Home",
  isSingleton: true,
  filePathPattern: `home.md`,
  fields: {
    title: { type: "string", required: true },
    lead: { type: "string", required: true },
  },
  computedFields: {
    title: {
      type: "string",
      resolve: (home) => typographicTransformations(home.title),
    },
    lead: {
      type: "string",
      resolve: (home) => typographicTransformations(home.lead),
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    lead: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$/, ""),
    },
    title: {
      type: "string",
      resolve: (post) => typographicTransformations(post.title),
    },
    lead: {
      type: "string",
      resolve: (post) => typographicTransformations(post.lead),
    },
  },
}));

export default makeSource(async () => {
  const highlighter = await shiki.getHighlighter({ theme: "css-variables" });
  return {
    contentDirPath: "content",
    documentTypes: [Home, Post],
    markdown: {
      remarkPlugins: [
        [
          remarkTextr,
          {
            options: { locale: "en-uk" },
            plugins: [typographicTransformations],
          },
        ],
      ],
      rehypePlugins: [[rehypeShiki, { highlighter }]],
    },
  };
});
