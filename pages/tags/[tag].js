import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { getMarkdownTags, parseMarkdownFiles } from "@utils/utils";

import Layout from "@components/Layout";
import PostList from "@components/PostList";

export default function TagList({ config, posts, tag }) {
  return (
    <Layout config={config} pageTitle={`${tag} :: ${config.name}`}>
      <PostList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps({ ...context }) {
  const { tag } = context.params;

  // read config file
  const config = (await import(`../../siteconfig.json`)).default;

  // collect all of the markdown files in /content and transform them using
  // gray-matter to parse the YAML header and the markdown body
  let ctx = require.context("../../content/posts", true, /\.md$/);
  const posts = parseMarkdownFiles(ctx).filter(
    (post) => post.frontmatter.tags && post.frontmatter.tags.includes(tag)
  );

  return {
    props: {
      config,
      posts,
      tag,
    },
  };
}

export async function getStaticPaths() {
  const ctx = require.context("../../content/posts", true, /\.md$/);
  const tags = getMarkdownTags(ctx);

  const paths = tags.map((tag) => `/tags/${tag}`);

  return {
    paths,
    fallback: false,
  };
}
