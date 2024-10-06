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
        {asPath === "/" && <meta name="og:title" content="Mycroft Studios" />|| <meta name="og:title" content={title + " - Mycroft Studios"} />}
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/static/logo_white_small.png" />
        <meta name="keywords" content="HTML, CSS, JavaScript, FiveM, Scripts, Free, ESX, Qbus, QB, qb-core, ox, overextended, qbox, txAdmin, server, fxserver, mycroft, lua, tutorial, Website, learn, code, Cfx, Cfx.re, GTA, Gta V, GTA 5, leaks, wasabi, okok, dirk, Rockstar, Games, Warden, RedM, ox_inventory, ox_lib, scripts, hacks, 2024, working, social club, xbox, playstation, cheats, forums, github, store, Framework, documentation, docs, tebex, patreon, game, build, taxi, scaleform, AI, gta online, gta:o, inspired"/>
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
