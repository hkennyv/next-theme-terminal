import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { getMarkdownSlugs } from "@utils/utils";

import Layout from "@components/Layout";
import Frontmatter from "@components/Frontmatter";

export default function Page({ config, post }) {
  const { frontmatter, markdownBody, slug } = post;

  return (
    <Layout
      config={config}
      pageTitle={`${frontmatter.title} :: ${config.name}`}
    >
      <div className="post">
        <Frontmatter post={post} />
        <ReactMarkdown source={markdownBody} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...context }) {
  const { pagename } = context.params;

  // read config file
  const config = (await import(`../siteconfig.json`)).default;

  // construct post from corresponding markdown file
  const content = await import(`../content/pages/${pagename}.md`);
  const document = matter(content.default);

  const post = {
    frontmatter: document.data,
    markdownBody: document.content,
    slug: pagename,
  };

  return {
    props: {
      config,
      post,
    },
  };
}

export async function getStaticPaths() {
  const ctx = require.context("../content/pages", true, /\.md$/);

  const slugs = getMarkdownSlugs(ctx);
  const paths = slugs.map((slug) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
