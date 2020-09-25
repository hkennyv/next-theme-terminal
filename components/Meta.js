import Head from "next/head";

export default function Meta({ description, keywords }) {
  return (
    <>
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keywords || ""} />
      <meta name="robots" content="noodp" />
      {/* <link rel="canonical" href="" /> */}
    </>
  );
}
