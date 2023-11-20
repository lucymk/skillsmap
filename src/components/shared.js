/* eslint-disable react/prop-types */

import React from 'react'
import { Link } from 'gatsby'

import { ActionButton } from './buttons'

import {
  headline,
  h1,
  h2,
  h3,
  subheader,
  copy,
  caption,
  list,
  link,
  details,
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
  return <div className={`${copy}`}>{children}</div>
}

export function Caption({ children }) {
  return <p className={`${caption}`}>{children}</p>
}

export function BulletList({ children }) {
  return <ul className={`${list}`}>{children}</ul>
}

export function ExternalLink({ src, children }) {
  return (
    <a target="_blank" className={`${link}`} rel="noreferrer" src={src}>
      {children}
    </a>
  )
}

export function InternalLink({ to, children }) {
  return (
    <Link className={`${link}`} to={to}>
      {children}
    </Link>
  )
}

export function Contact() {
  return (
    <>
      <H3>Contact</H3>
      <p>For enquiries about:</p>
      <ul>
        <li>the taxonomy and research behind SkillsMap®</li>
        <li>
          INSET days on transferable skills development in curriculum or through
          careers education
        </li>
        <li>training and development on careers education</li>
        <li>designing careers and employability strategy</li>
      </ul>
      <p>
        Please visit Kate’s website at{' '}
        <ExternalLink src="https://katedaubneycareers.com">
          katedaubneycareers.com
        </ExternalLink>
      </p>
    </>
  )
}

export function FurtherLinks({ links }) {
  return (
    <>
      <H3>Further Information</H3>
      <p>You might be interested in browsing the following pages:</p>
      <div
        style={{
          display: 'flex',
          gap: 'var(--spacing-s)',
          maxWidth: '700px',
          flexWrap: 'wrap',
        }}
      >
        {links.map(({ link, text }) => (
          <Link key={text} to={link}>
            <ActionButton rightActive={true}>{text} </ActionButton>
          </Link>
        ))}
      </div>
    </>
  )
}

export function Details({ children }) {
  return <details className={`${details}`}>{children}</details>
}
export function H1WithSubheader({ headerText, subheaderText }) {
  return (
    <div>
      <h1 className={`${h1}`} style={{ margin: '0' }}>
        {headerText}
      </h1>
      <h4
        className={`${subheader}`}
        style={{ margin: 'var(--spacing-s) 0 var(--spacing-m) 0' }}
      >
        {subheaderText}
      </h4>
    </div>
  )
}
