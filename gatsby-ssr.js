/* eslint-disable react/jsx-key */
import * as React from 'react'

const HtmlAttributes = {
  lang: 'en',
}

const HeadComponents = [
  <link
    rel="preload"
    href="/fonts/Inter.ttf"
    as="font"
    type="font/ttf"
    crossOrigin="anonymous"
    key="interFont"
  />,
  <meta name="apple-mobile-web-app-capable" content="yes" />,
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />,
  <meta name="apple-mobile-web-app-title" content="  Your SkillsMap®" />,
  <title>
    Your SkillsMap®: an application which helps you discover the transferable
    skills you are building and using in your studies.
  </title>,
]

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents(HeadComponents)
  setHtmlAttributes(HtmlAttributes)
}
