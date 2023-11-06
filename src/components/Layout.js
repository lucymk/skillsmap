/* eslint-disable react/prop-types */

import React from 'react'
import * as layoutStyles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <main className={` ${layoutStyles.container}`}>
      <p className={` ${layoutStyles.fontHeadline}`}>I AM A HEADLINE</p>
      {children}
    </main>
  )
}
