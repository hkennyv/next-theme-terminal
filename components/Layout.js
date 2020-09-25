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
      <body className={config.params.color}>
        <div className={"container headings--one-size"}>
          {/* Header */}
          <Header />
          <div className="content">
            {/* block main */}
            {children}
          </div>
        </div>
      </body>
      {/* Footer */}
    </>
  );
}
