/* eslint-disable react/prop-types */

import React from 'react'
import {
  headline,
  h1,
  h2,
  h3,
  subheader,
  copy,
  caption,
  list,
} from './shared.module.css'

export function Headline({ children }) {
  return <p className={`${headline}`}>{children}</p>
}

export function H1({ children }) {
  return <h1 className={`${h1}`}>{children}</h1>
}

export function H2({ children }) {
  return <h2 className={`${h2}`}>{children}</h2>
}

export function H3({ children }) {
  return <h3 className={`${h3}`}>{children}</h3>
}

export function Subheader({ children }) {
  return <h4 className={`${subheader}`}>{children}</h4>
}

export function Copy({ children }) {
  return <p className={`${copy}`}>{children}</p>
}

export function Caption({ children }) {
  return <p className={`${caption}`}>{children}</p>
}

export function BulletList({ children }) {
  return <ul className={`${list}`}>{children}</ul>

export function H1WithSubheader({ headerText, subheaderText }) {
  return (
    <div>
      <h1 className={`${h1}`} style={{ margin: '0' }}>
        {headerText}
      </h1>
      <h4 className={`${subheader}`} style={{ margin: '0' }}>
        {subheaderText}
      </h4>
    </div>
  )
}