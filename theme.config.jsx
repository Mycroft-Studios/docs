import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://mycroft-studios.co.uk${asPath}`;
  const description = frontMatter.description || "Mycroft Studios Documentation";
  return (
    <>
      {asPath === "/" && <title> Mycroft Studios </title> || <title> {title} - Mycroft Studios </title>}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/static/logo_white_small.png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
        {asPath === "/" && <meta name="og:title" content="Mycroft Stuidos" />|| <meta name="og:title" content={title + " - Mycroft Studios"} />}
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/static/logo_white_small.png" />
    </>
  );
}

const config = {
    logo: (
        <div
      style={{
          paddingLeft: '50px',
          lineHeight: '38px',
          background: "url('./static/logo_white_small.png') no-repeat left",
          backgroundSize: '64px',
          fontWeight: 550,
      }}
     >
      <p style={{marginLeft: "20px"}}> Mycroft Studios</p>
    </div>
    ),
  project: {
    link: 'https://github.com/mycroft-studios',
  },
  chat: {
    link: 'https://discord.gg/TCCHMySN2N',
  },
  head: useHead,
  docsRepositoryBase: 'https://github.com/mycroft-studios/docs/blob/main',
    toc: {
        backToTop: true,
    },
  footer: {
      content: (
          <span>
        MIT {new Date().getFullYear()} ©{' '}
             <a href="https://github.com/Mycroft-Studios">Mycroft Studios</a>
        .
      </span>
      )
  },
}

export default config
