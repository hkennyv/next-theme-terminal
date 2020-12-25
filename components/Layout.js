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
        {/* use config.params.favicon if provided, otherwise fallback to the
            provided themeColor icons in public/favicon/{color}.png */}
        <link
          rel="shortcut icon"
          href={
            params.favicon
              ? `/${params.favicon}`
              : `/favicon/${params.themeColor}.png`
          }
        />

        {/* render all the meta tags in the header, still a WIP */}
        <Meta description={subtitle} keywords={keywords} params={params} />

        {/* if the page uses <Layout /> and supplies a `pageTitle` prop, use
            that. otherwise, fallback to the default `config.title` */}
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
