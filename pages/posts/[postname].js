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
        <Frontmatter post={post} root={"/posts"} />
        <ReactMarkdown source={markdownBody} />
      </div>
      {/* TODO: implement pagination, sorted by dates */}
      {/* <div className="pagination">
        <div class="pagination__buttons">
          <span className="button previous">
            <Link href={`/posts/${getPrevPost()}`}>
              <a>
                <span class="button__icon">←</span>
                <span class="button__text">Newer posts</span>
              </a>
            </Link>
          </span>
          <span className="button next">
            <Link href={`/posts/${getNextPost()}`}>
              <a>
                <span class="button__text">Older posts</span>
                <span class="button__icon">→</span>
              </a>
            </Link>
          </span>
        </div>
      </div> */}
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
