import { parseMarkdownFiles } from "@utils/utils";

import Layout from "@components/Layout";
import PostList from "@components/PostList";

export default function Index({ config, posts }) {
  return (
    <Layout pageTitle={config.name} config={config}>
      <PostList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const config = (await import(`../../siteconfig.json`)).default;

  // collect all of the markdown files in /content and transform them using
  // gray-matter to parse the YAML header and the markdown body
  let ctx = require.context("../../content/posts", true, /\.md$/);
  const posts = parseMarkdownFiles(ctx);

  return {
    props: {
      config,
      posts,
    },
  };
}
