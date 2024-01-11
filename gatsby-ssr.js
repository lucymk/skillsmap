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
  // eslint-disable-next-line react/jsx-key
  <title>
    Your SkillsMap®: an application which helps you discover the transferable
    skills you are building and using in your studies.
  </title>,
]

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents(HeadComponents)
  setHtmlAttributes(HtmlAttributes)
}
