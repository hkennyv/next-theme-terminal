import Head from "next/head";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Meta from "@components/Meta";

function getMeta({ authorTwitter, description, keywords, params }) {
  return (
    <>
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keywords ? keywords.join(",") : ""} />
      <meta name="robots" content="noodp" />
      {/* <link rel="canonical" href="" /> */}

      {/* Custom CSS to override theme properties */}
      {/*
          Icons: See components/Layout.js.. for some reason, I can't render
          <link> tags in this component. I suspect that it's related to not
          being directly rendered under <Head>?
       */}
      <link
        rel="shortcut icon"
        href={
          params.favicon
            ? `/${params.favicon}`
            : `/favicon/${params.themeColor}.png`
        }
      />
      {/* Twitter Card */}
      {authorTwitter && (
        <>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content={`${authorTwitter}`} />
        </>
      )}
      {/* OG data */}
      {/* RSS */}
      {/* JSON Feed */}
      {/* Extended Head Section */}
    </>
  );
}

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
        {/* change back to using the <Meta /> component if this issue ever gets resolved
            (see commented component below):
            https://github.com/vercel/next.js/issues/17721
        */}
        {getMeta({ description: subtitle, keywords, params })}

        {/* render all the meta tags in the header, still a WIP */}
        {/* <Meta description={subtitle} keywords={keywords} params={params} /> */}

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
