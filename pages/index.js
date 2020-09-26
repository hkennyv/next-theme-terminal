import matter from "gray-matter";

import Layout from "@components/Layout";
import PostList from "@components/PostList";

export default function Index({ config, posts }) {
  return (
    <Layout pageTitle="Terminal" config={config}>
      <div className="index-content framed">
        <h1 id="hello-there">Hello there!</h1>
        <p>
          Welcome in demo of the <code>Terminal</code> theme. Please, look
          around and check whether this is what you are looking for.
        </p>
      </div>
      <PostList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const config = (await import(`../siteconfig.json`)).default;

  // collect all of the markdown files in /content and transform them using
  // gray-matter to parse the YAML header and the markdown body
  let ctx = require.context("../content", true, /\.md$/);
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, idx) => {
      const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[idx];
      const document = matter(value.default);

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });

    return data;
  })(ctx);

  return {
    props: {
      config,
      posts,
    },
  };
}
