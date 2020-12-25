import Head from "next/head";

// TODO: lots of stuff todo here.. fill out the open graph data and a lot of
// other meta properties
export default function Meta({ authorTwitter, description, keywords, params }) {
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
