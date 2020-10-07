import Head from "next/head";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Meta from "@components/Meta";

export default function Layout({ children, pageTitle, config, ...props }) {
  const {
    title,
    subtitle,
    keywords,
    copyright,
    homepage,
    logo,
    menu,
    params,
  } = config;

  return (
    <>
      <Head>
        <Meta description={subtitle} keywords={keywords} />

        <title>{pageTitle || title}</title>
      </Head>
      <div className={"container headings--one-size"}>
        <Header
          logoText={logo.logoText}
          logoHomeLink={logo.logoHomeLink}
          menuItems={menu}
          showMenuItems={params.showMenuItems}
        />
        <div className="content">
          {/* block main */}
          {children}
        </div>
        {/* Footer */}
        <Footer copyright={copyright} />
      </div>
    </>
  );
}
