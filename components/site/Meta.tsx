import React from "react";
import Head from "next/head";

const Meta = ({ pageTitle, description }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta
        name="image"
        property="og:image"
        content=" https://components.bulma-css.com/home.png"
      />
      <link rel="icon" type="image/svg+xml" href="/icons/rocket.svg" />
      <link rel="alternate icon" href="/icons/favicon.ico" />
      <link rel="mask-icon" href="/icons/rocket.svg" />
      <meta property="og:type" content="website" />
      <meta
        name="og:title"
        property="og:title"
        content="Bulma-css Free and open source UI components for Bulma Framework"
      />
      <meta property="og:url" content=" https://components.bulma-css.com" />
      <link rel="canonical" href="https://components.bulma-css.com" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
export default Meta;
