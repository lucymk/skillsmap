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
  clusterCategoryDefAndWorkplace,
} from './clusterCategory.module.css'
import OpenInNewTabSvg from '../assets/icons/openInNewTab.svg'
import ClusterIconSvg from '../assets/icons/clusterIcon.svg'
import WorkplaceExamplesIconSvg from '../assets/icons/workplaceExamplesIcon.svg'
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
        <span style={{ fontWeight: 'bold' }}>{clusterOrCategory}</span>{' '}
        {title.toLowerCase()}.
        <a
          href="../../../about/categoriesAndClusters"
          target="_blank"
          rel="noopener noreferrer"
          className={`${whatDoesThisMeanLink}`}
        >
          What does this mean?
          <OpenInNewTabSvg
            style={{ width: '15px', paddingLeft: 'var(--spacing-xxs)' }}
          />
        </a>
      </div>
      <div className={`${moreSkillsLink}`}>
        <Link
          to={`../../${
            title === 'Cluster' ? 'clusters' : 'categories'
          }/${clusterOrCategory.replace(/\s/g, '+')}`}
          style={{
            color: style.panelColor,
            textDecoration: 'underline',
            textDecorationColor: style.panelColor,
            marginTop: 'var(--spacing-m)',
          }}
        >
          More skills in this {title.toLowerCase()} &gt;
        </Link>
      </div>
    </div>
  )
}

function formatBoldText(text) {
  if (!text) return null
  const parts = text.split('**')
  return parts.map((part, index) =>
    index % 2 === 0 ? part : <strong key={index}>{part}</strong>
  )
}

export function ClusterCategoryDefinitionCard({
  cluster,
  category,
  definition,
  workplaceUse,
  style,
}) {
  return (
    <div className={`${clusterCategoryDefinitionCard}`} style={style}>
      <div className={`${clusterCategoryDefAndWorkplace}`}>
        {cluster && <ClusterIconSvg />}
        {category && <CategoryIconSvg />}
        {definition && <span>{formatBoldText(definition)}</span>}
      </div>
      <div className={`${clusterCategoryDefAndWorkplace}`}>
        <WorkplaceExamplesIconSvg />
        <span>{formatBoldText(workplaceUse)}</span>
      </div>
    </div>
  )
}

export default function ClusterCategory({ cluster, category }) {
  return (
    <div className={`${clusterCategory}`}>
      <Panel
        icon={<CategoryIconSvg />}
        title="Category"
        clusterOrCategory={category}
        style={{
          backgroundColor: 'var(--light-purple-faint)',
          panelColor: 'var(--purple)',
          borderLeft: 'var(--border-black)',
          borderTop: 'var(--border-black)',
          borderBottom: 'var(--border-black)',
          borderRadius: 'var(--br-card) 0 0 var(--br-card)',
        }}
      />
      <Panel
        icon={<ClusterIconSvg />}
        title="Cluster"
        clusterOrCategory={cluster}
        style={{
          border: 'var(--border-black)',
          borderRadius: '0 var(--br-card) var(--br-card) 0',
          backgroundColor: 'var(--light-green-faint)',
          panelColor: 'var(--dark-green)',
        }}
      />
    </div>
  )
}
