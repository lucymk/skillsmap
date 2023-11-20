import React from 'react'
import {
  breadcrumbs,
  chevron,
  links,
  linksWithPath,
} from './breadcrumbs.module.css'
import { Link } from 'gatsby'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'

export default function Breadcrumbs({ crumbs }) {
  return (
    <div className={`${breadcrumbs}`}>
      {crumbs.map(({ label, path }, i) => {
        return (
          <div key={`breadcrumb-${i}`}>
            {path ? (
              <Link
                className={path ? `${links} ${linksWithPath}` : `${links}`}
                to={path}
              >
                {label.length > 50 ? label.substring(0, 50) + '...' : label}
              </Link>
            ) : (
              <span>
                {label.length > 50 ? label.substring(0, 50) + '...' : label}
              </span>
            )}
            {i != crumbs.length - 1 && (
              <ChevronRightSvg className={`${chevron}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}
