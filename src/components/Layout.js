/* eslint-disable react/prop-types */

import React from 'react'
import { container } from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function Layout({ children }) {
  return (
    <main className={`${container}`}>
      <StaticImage src="../assets/icons/chevronRight.svg" />
      {children}
    </main>
  )
}
