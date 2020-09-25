import Layout from "@components/Layout";

export default function Index({ config }) {
  return (
    <Layout pageTitle="Terminal" config={config}>
      <div>This is my index page :)</div>
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
