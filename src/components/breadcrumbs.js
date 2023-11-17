import React from 'react'
import { breadcrumbs, chevron, links } from './breadcrumbs.module.css'
import { Link } from 'gatsby'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'

export default function Breadcrumbs({ crumbs }) {
  const lastBreadcrumb = crumbs.pop()
  return (
    <div className={`${breadcrumbs}`}>
      {crumbs.map(({ label, path }) => {
        return (
          <div key={label}>
            <Link className={`${links}`} to={path}>
              {label}
            </Link>
            <ChevronRightSvg className={`${chevron}`} />
          </div>
        )
      })}
      {lastBreadcrumb.label}
    </div>
  )
}
