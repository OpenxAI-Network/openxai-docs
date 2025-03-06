// theme.config.tsx
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const config: DocsThemeConfig = {
  logo: <span>OpenxAI Docs</span>,
  docsRepositoryBase: 'https://github.com/johnforfar/openxai-docs',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="OpenxAI Docs" />
      <meta property="og:description" content="OpenxAI Documentation" />
    </>
  ),
  sidebar: {
    //defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navbar: {
    extraContent: (
      <>
        <a 
          href="https://x.com/OpenxAINetwork" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            marginRight: '16px',
            verticalAlign: 'middle'
          }}
        >
          <FaXTwitter size={24} />
        </a>
        <a 
          href="https://t.me/OpenxAINetwork" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            marginRight: '16px',
            verticalAlign: 'middle'
          }}
        >
          <FaTelegramPlane size={24} />
        </a>
      </>
    )
  },
  footer: {
    content: 'OpenxAI Docs'
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
    storageKey: 'theme'
  },
  navigation: false
}

export default config