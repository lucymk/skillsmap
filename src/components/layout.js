/* eslint-disable react/prop-types */

import React from 'react'
import { layout, contentsStyle } from './layout.module.css'
import NavDrawer from './navDrawer.js'

export default function Layout({ children }) {
  return (
    <main className={`${layout}`}>
      <NavDrawer style={{ position: 'sticky', top: '0' }} />
      <div className={`${contentsStyle}`}>{children}</div>
    </main>
  )
}
