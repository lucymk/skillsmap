/* eslint-disable react/prop-types */

import React from 'react'
import { container } from './layout.module.css'

export default function Layout({ children }) {
  return <main className={`${container}`}>{children}</main>
}
