import React from 'react'
import { Link } from 'gatsby'
import {
  panel,
  panelTitle,
  panelText,
  whatDoesThisMeanLink,
  moreSkillsLink,
  clusterCategory,
  clusterCategoryDefinitionCard,
} from './clusterCategory.module.css'
import OpenInNewTabSvg from '../assets/icons/openInNewTab.svg'
import ClusterIconSvg from '../assets/icons/clusterIcon.svg'
import CategoryIconSvg from '../assets/icons/categoryIcon.svg'

function Panel({ icon, title, clusterOrCategory, style }) {
  return (
    <div className={`${panel}`} style={style}>
      <div className={`${panelTitle}`}>
        {icon}
        {title}
      </div>
      <div className={`${panelText}`}>
        This skill is in the{' '}
        <span style={{ fontWeight: 'bold' }}>
          {clusterOrCategory.toLowerCase()}
        </span>{' '}
        {title.toLowerCase()}.
        <Link className={`${whatDoesThisMeanLink}`}>
          What does this mean?
          <OpenInNewTabSvg
            style={{ width: '15px', paddingLeft: 'var(--spacing-xxs)' }}
          />
        </Link>
      </div>
      <div className={`${moreSkillsLink}`}>
        <Link
          to={`../../${
            title === 'Cluster' ? 'clusters' : 'categories'
          }/${clusterOrCategory.replace(/\s/g, '+')}`}
          style={{
            color: style.panelColor,
            textDecoration: 'underline',
            textDecorationColour: style.panelColor,
            marginTop: 'var(--spacing-m)',
          }}
        >
          More skills in this {title.toLowerCase()} &gt;
        </Link>
      </div>
    </div>
  )
}

export function ClusterCategoryDefinitionCard({
  cluster,
  category,
  definition,
  style,
}) {
  return (
    <div className={`${clusterCategoryDefinitionCard}`} style={style}>
      {cluster && <ClusterIconSvg />}
      {category && <CategoryIconSvg />}
      {definition}
    </div>
  )
}

export default function ClusterCategory({ cluster, category }) {
  return (
    <div className={`${clusterCategory}`}>
      <Panel
        icon={<ClusterIconSvg />}
        title="Cluster"
        clusterOrCategory={cluster}
        style={{
          borderLeft: 'var(--border-black)',
          borderTop: 'var(--border-black)',
          borderBottom: 'var(--border-black)',
          borderRadius: 'var(--br-card) 0 0 var(--br-card)',
          backgroundColor: 'var(--light-green-faint)',
          panelColor: 'var(--dark-green)',
        }}
      />
      <Panel
        icon={<CategoryIconSvg />}
        title="Category"
        clusterOrCategory={category}
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
