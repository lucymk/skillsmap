import React from 'react'
import { breadcrumbs, chevron } from './breadcrumbs.module.css'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'

export default function Breadcrumbs({ breadcrumbTexts }) {
  const lastBreadcrumb = breadcrumbTexts.pop()
  return (
    <div className={`${breadcrumbs}`}>
      {breadcrumbTexts.map((breadcrumbText, i, row) => {
        console.log(breadcrumbText)
        return (
          <div key={breadcrumbText}>
            {breadcrumbText}
            <ChevronRightSvg className={`${chevron}`} />
          </div>
        )
      })}
      <div>{lastBreadcrumb}</div>
    </div>
  )
}
