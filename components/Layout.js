import Head from "next/head";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Meta from "@components/Meta";

export default function Layout({ children, pageTitle, config, ...props }) {
  return (
    <>
      <Head>
        <Meta description={config.description} keywords={config.keywords} />

        <title>{pageTitle || config.name}</title>
      </Head>
      <div className={"container headings--one-size"}>
        {/* Header TODO: make `menuLinks` and `menuMoreLinks` either come from config
         * or come from dynamically finding the paths in `pages/`
         */}
        <Header
          logoText="Terminal"
          menuLinks={["/about", "/showcase"]}
          menuMoreLinks={["/extra"]}
        />
        <div className="content">
          {/* block main */}
          {children}
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
