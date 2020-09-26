import Layout from "@components/Layout";
import PostList from "@components/PostList";

export default function Index({ config }) {
  return (
    <Layout pageTitle="Terminal" config={config}>
      <div className="index-content framed">
        <h1 id="hello-there">Hello there!</h1>
        <p>
          Welcome in demo of the <code>Terminal</code> theme. Please, look
          around and check whether this is what you are looking for.
        </p>
      </div>
      <PostList posts={[]} />
    </Layout>
  );
}

export async function getStaticProps() {
  const config = (await import(`../siteconfig.json`)).default;

  return {
    props: {
      config,
    },
  };
}
