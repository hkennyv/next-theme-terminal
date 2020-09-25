import Head from "next/head";

import Header from "@components/Header";
import Meta from "@components/Meta";

export default function Layout({ children, pageTitle, config, ...props }) {
  return (
    <>
      <Head>
        <Meta description={config.description} keywords={config.keywords} />

        <title>{pageTitle || ""}</title>
      </Head>
      <div className={"container headings--one-size"}>
        {/* Header */}
        <Header logoText="Terminal" menuItems={[]} />
        <div className="content">
          {/* block main */}
          {children}
        </div>
      </div>
      {/* Footer */}
    </>
  );
}
