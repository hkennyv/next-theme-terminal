import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { getMarkdownSlugs, parseMarkdownFiles } from "@utils/utils";

import Layout from "@components/Layout";
import Frontmatter from "@components/Frontmatter";

export default function Post({ config, post, nextPost, prevPost }) {
  const { frontmatter, markdownBody, slug } = post;

  return (
    <Layout
      config={config}
      pageTitle={`${frontmatter.title} :: ${config.title}`}
    >
      <div className="post">
        <Frontmatter post={post} root={"/posts"} />
        <ReactMarkdown plugins={[gfm]} children={markdownBody} />
      </div>
      {/* pagination */}
      <div className="pagination">
        <div className="pagination__title">
          <span className="pagination__title-h">Read other posts</span>
          <hr />
        </div>
        <div className="pagination__buttons">
          {prevPost && (
            <span className="button previous">
              <Link href={`/posts/${prevPost.slug}`}>
                <a>
                  <span className="button__icon">←</span>
                  <span className="button__text">{prevPost.slug}</span>
                </a>
              </Link>
            </span>
          )}
          {nextPost && (
            <span className="button next">
              <Link href={`/posts/${nextPost.slug}`}>
                <a>
                  <span className="button__text">{nextPost.slug}</span>
                  <span className="button__icon">→</span>
                </a>
              </Link>
            </span>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...context }) {
  const { postname } = context.params;

  // read config file
  const config = (await import(`../../siteconfig.json`)).default;

  // read all posts
  let ctx = require.context("../../content/posts", true, /\.\/.*\.md$/);
  const posts = parseMarkdownFiles(ctx);

  const postIndex = posts.findIndex((element) => element.slug === postname);
  const post = posts[postIndex];
  const nextPost = postIndex + 1 < posts.length ? posts[postIndex + 1] : null;
  const prevPost = postIndex - 1 >= 0 ? posts[postIndex - 1] : null;

  // console.log(post.slug, nextPost?.slug, prevPost?.slug);

  return {
    props: {
      config,
      post,
      nextPost,
      prevPost,
    },
  };
}

export async function getStaticPaths() {
  const ctx = require.context("../../content/posts", true, /\.\/.*\.md$/);
  const slugs = getMarkdownSlugs(ctx);
  const paths = slugs.map((slug) => `/posts/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
