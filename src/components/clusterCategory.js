import React from 'react'
import { Link } from 'gatsby'
import { panel, clusterCategory } from './clusterCategory.module.css'
import OpenInNewTabSvg from '../assets/icons/openInNewTab.svg'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'
import ClusterIconSvg from '../assets/icons/clusterIcon.svg'
import CategoryIconSvg from '../assets/icons/categoryIcon.svg'

function Panel({ icon, title, body, style }) {
  return (
    <div className={`${panel}`} style={style}>
      <div>
        {icon}
        {title}
      </div>
      {body}
      <Link
        style={{
          borderBottom: 'var(--border-black)',
        }}
      >
        What does this mean?
        <OpenInNewTabSvg />
      </Link>
      <Link
        style={{
          borderBottom: 'var(--border-black)',
          color: style.panelColor,
        }}
      >
        More skills in this {title.toLowerCase()}
        <ChevronRightSvg fill={style.panelColor} />
      </Link>
    </div>
  )
}

export default function ClusterCategory() {
  return (
    <div className={`${clusterCategory}`}>
      <Panel
        icon={<ClusterIconSvg />}
        title={'Cluster'}
        body={'Some text for cluster'}
        style={{
          borderLeft: 'var(--border-black)',
          borderTop: 'var(--border-black)',
          borderBottom: 'var(--border-black)',
          borderRadius: 'var(--br-card) 0 0 var(--br-card)',
          backgroundColor: 'var(--light-green-faint)',
          panelColor: 'var(--light-green)',
        }}
      />
      <Panel
        icon={<CategoryIconSvg />}
        title={'Category'}
        body={'Some different text for category'}
        style={{
          border: 'var(--border-black)',
          borderRadius: '0 var(--br-card) var(--br-card) 0',
          backgroundColor: 'var(--light-purple-faint)',
          panelColor: 'var(--light-purple)',
        }}
      />
    </div>
  )
}
