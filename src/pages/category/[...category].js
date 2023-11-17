import * as React from 'react'
import { graphql } from 'gatsby'
import { SkillsButtons } from '../../components/buttons'
import Breadcrumbs from '../../components/breadcrumbs'
import Layout from '../../components/layout'

const getCategoryFromSearchQuery = ({ search }) =>
  search.substring(search.indexOf('=') + 1).replace(/\+/g, ' ')

const CategoryPage = ({
  data: {
    category: { nodes: categoriesData },
    skills: { nodes: skills },
  },
  location: { search },
}) => {
  const category = getCategoryFromSearchQuery({ search })
  const categoryMatches = categoriesData.filter(({ data: { Category } }) => {
    return Category.toLowerCase() === category.toLowerCase()
  })

  if (categoryMatches.length === 0) {
    typeof window !== 'undefined' && window.location.replace('/404/')
    return <main />
  }

  const {
    data: { Category: categoryMatch, CategoryDefinition: categoryDefinition },
  } = categoryMatches[0]

  const associatedSkills = skills
    .filter(({ data: { Category } }) => {
      return Category === categoryMatch
    })
    .map(({ data: { Skill } }) => Skill)

  return (
    <Layout>
      <Breadcrumbs
        crumbs={[
          { label: 'Categories', path: 'FIX LINK' },
          { label: `${categoryMatch}` },
        ]}
      />
      <h1>{categoryMatch}</h1>
      <h3 style={{ fontWeight: 'normal', paddingBottom: 'var(--spacing-m)' }}>
        {categoryDefinition}
        <br />
        <br />
        Transferable skills within this category:
      </h3>
      <SkillsButtons skillsArray={associatedSkills} />
    </Layout>
  )
}

export default CategoryPage

// queryName filters by table, see gatsby-config
export const query = graphql`
  query {
    category: allAirtable(filter: { queryName: { eq: "Categories" } }) {
      nodes {
        data {
          Category
          CategoryDefinition
        }
      }
    }
    skills: allAirtable(filter: { queryName: { eq: "Skills" } }) {
      nodes {
        data {
          Category
          Skill
        }
      }
    }
  }
`
