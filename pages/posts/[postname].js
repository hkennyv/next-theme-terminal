import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { getMarkdownSlugs } from "@utils/utils";

import Layout from "@components/Layout";
import Frontmatter from "@components/Frontmatter";

export default function Post({ config, post }) {
  const { frontmatter, markdownBody, slug } = post;

  return (
    <Layout
      config={config}
      pageTitle={`${frontmatter.title} :: ${config.name}`}
    >
      <div className="post">
        <Frontmatter post={post}/>
        <ReactMarkdown source={markdownBody} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...context }) {
  const { postname } = context.params;

  // read config file
  const config = (await import(`../../siteconfig.json`)).default;

  // construct post from corresponding markdown file
  const content = await import(`../../content/posts/${postname}.md`);
  const document = matter(content.default);

  const post = {
    frontmatter: document.data,
    markdownBody: document.content,
    slug: postname,
  };

  return {
    props: {
      config,
      post,
    },
  };
}

export async function getStaticPaths() {
  const ctx = require.context("../../content/posts", true, /\.md$/);
  const slugs = getMarkdownSlugs(ctx);
  const paths = slugs.map((slug) => `/posts/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
