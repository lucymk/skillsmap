import React from 'react'
import { Link } from 'gatsby'
import {
  panel,
  panelTitle,
  panelText,
  whatDoesThisMeanLink,
  moreSkillsLink,
  clusterCategory,
} from './clusterCategory.module.css'
import OpenInNewTabSvg from '../assets/icons/openInNewTab.svg'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'
import ClusterIconSvg from '../assets/icons/clusterIcon.svg'
import CategoryIconSvg from '../assets/icons/categoryIcon.svg'

function Panel({ icon, title, body, style }) {
  return (
    <div className={`${panel}`} style={style}>
      <div className={`${panelTitle}`}>
        {icon}
        {title}
      </div>
      <div className={`${panelText}`}>
        {body}
        <Link className={`${whatDoesThisMeanLink}`}>
          What does this mean?
          <OpenInNewTabSvg
            style={{ width: '15px', paddingLeft: 'var(--spacing-xxs)' }}
          />
        </Link>
      </div>
      <Link className={`${moreSkillsLink}`} style={{ color: style.panelColor }}>
        More skills in this {title.toLowerCase()} &gt;
      </Link>
    </div>
  )
}

export default function ClusterCategory() {
  return (
    <div className={`${clusterCategory}`}>
      <Panel
        icon={<ClusterIconSvg />}
        title="Cluster"
        body="Some text for cluster"
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
        title="Category"
        body="Some different text for category"
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
