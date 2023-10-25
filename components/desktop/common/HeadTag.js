import React from "react";
import Head from "next/head";

export default function HeadTag({ title, description }) {
  return (
    <Head>
      {/* title */}
      <title>{title}</title>

      {/* description */}
      <meta name="description" content={description} />

      {/* keywords */}
      <meta
        name="keywords"
        content="ReactJS, NextJS, GatsbyJS, NodeJS, MongoDB, React Native, Firebase, ReactJS development firm India, ReactJS development firm Pune, ReactJS development company, Mobile App development company in pune, mobile app development company in india, best mobile app development company in india, best mobile app developer pune, best app development company india, best software company pune, SAAS development company india, SAAS development company pune, SAAS product developer, React Native development company pune, Best reactjs developer pune, best reactjs development company india, React development pune, react development india, best nodejs development company india, best nodejs development company pune, best nodejs developers, best software development company in pune, best software development company india, best agile software development pune, agile software development pune, agile software development maharashtra, agile software development india"
      />

      {/* robots */}
      <meta name="robots" content="index,follow" />

      {/* og tags */}
      {/* <meta property="og:url" content="url" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Myrl Tech" />
        <meta property="og:description" content="description" />
        <meta property="og:image" content="path of image" /> */}

      {/* twitter */}
      {/* <meta name="twitter:title" content="Myrl Tech" />
        <meta name="twitter:description" content="Myrl Tech" />
        <meta name="twitter:image" content="path of image" />
        <meta name="twitter:card" content="summary" /> */}

      {/* favicon icon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
