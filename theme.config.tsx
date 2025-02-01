// theme.config.tsx
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const config: DocsThemeConfig = {
  logo: <span>OpenXAI Docs</span>,
  docsRepositoryBase: 'https://github.com/johnforfar/openxai-docs',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="OpenXAI Docs" />
      <meta property="og:description" content="OpenXAI Documentation" />
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
          href="#" 
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
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            marginRight: '16px',
            verticalAlign: 'middle'
          }}
        >
          <FaTwitter size={24} />
        </a>
      </>
    )
  },
  footer: {
    content: 'OpenXAI Docs'
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
    storageKey: 'theme'
  },
  navigation: false
}

export default config