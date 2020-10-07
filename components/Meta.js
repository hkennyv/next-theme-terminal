import Head from "next/head";

export default function Meta({ authorTwitter, description, keywords }) {
  return (
    <>
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keywords ? keywords.join(",") : ""} />
      <meta name="robots" content="noodp" />
      {/* <link rel="canonical" href="" /> */}

      {/* Custom CSS to override theme properties */}
      {/* Icons */}
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
