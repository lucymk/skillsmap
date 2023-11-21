import * as React from 'react'
import { graphql } from 'gatsby'
import { SkillsButtons } from '../../../components/buttons'
import Breadcrumbs from '../../../components/breadcrumbs'
import Layout from '../../../components/layout'
import { Copy, H1 } from '../../../components/shared'
import { ClusterCategoryDefinitionCard } from '../../../components/clusterCategory'

const getCategoryFromSearchQuery = ({ href }) =>
  href && href.replaceAll('/', '').split('categories')[1]

const CategoryPage = ({
  data: {
    category: { nodes: categoriesData },
    skills: { nodes: skills },
  },
  location: { href },
}) => {
  const category = getCategoryFromSearchQuery({ href })

  const categoryMatches = categoriesData.filter(
    ({ data: { Category } }) => Category.replaceAll(' ', '+') === category
  )

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
          { label: 'SkillsMap® Tool', path: '/skillsmapTool' },
          { label: 'Categories' },
          { label: `${categoryMatch}` },
        ]}
      />
      <H1>{categoryMatch}</H1>
      <Copy>
        <ClusterCategoryDefinitionCard
          cluster={false}
          category={true}
          definition={categoryDefinition}
          style={{ backgroundColor: 'var(--light-purple-faint)' }}
        />
        <h3>
          Skills in the{' '}
          <span style={{ backgroundColor: 'var(--light-purple-faint)' }}>
            {categoryMatch}
          </span>{' '}
          category:
        </h3>
        <SkillsButtons fromSearch={false} skillsArray={associatedSkills} />
      </Copy>
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
