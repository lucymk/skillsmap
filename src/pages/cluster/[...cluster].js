import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { SubjectTags, SkillsButtons } from '../../components/buttons'
import Breadcrumbs from '../../components/breadcrumbs'
import Layout from '../../components/layout'
import NextActiveSvg from '../../assets/icons/nextActive.svg'

const getClusterFromSearchQuery = ({ search }) =>
  search.substring(search.indexOf('=') + 1).replace(/\+/g, ' ')

const ClusterPage = ({
  data: {
    clusters: { nodes: clustersData },
    skills: { nodes: skills },
  },
  location: { search },
}) => {
  const cluster = getClusterFromSearchQuery({ search })
  const clusterMatches = clustersData.filter(({ data: { Cluster } }) => {
    return Cluster.toLowerCase() === cluster.toLowerCase()
  })

  if (clusterMatches.length === 0) {
    return <main />
  }

  const {
    data: { Cluster: clusterMatch, ClusterDefinition: clusterDefinition },
  } = clusterMatches[0]

  const associatedSkills = skills
    .filter(({ data: { Cluster } }) => {
      return Cluster === clusterMatch
    })
    .map(({ data: { Skill } }) => Skill)

  return (
    <Layout>
      <Breadcrumbs breadcrumbTexts={['Clusters', `${clusterMatch}`]} />
      <h1>{clusterMatch}</h1>
      <h3 style={{ fontWeight: 'normal', paddingBottom: 'var(--spacing-m)' }}>
        {clusterDefinition}
        <br />
        <br />
        Transferable skills within this cluster:
      </h3>
      <SkillsButtons skillsArray={associatedSkills} />
    </Layout>
  )
}

export default ClusterPage

// queryName filters by table, see gatsby-config
export const query = graphql`
  query {
    clusters: allAirtable(filter: { queryName: { eq: "Clusters" } }) {
      nodes {
        data {
          Cluster
          ClusterDefinition
          ClusterWorkplaceUse
        }
      }
    }
    skills: allAirtable(filter: { queryName: { eq: "Skills" } }) {
      nodes {
        data {
          Cluster
          Skill
        }
      }
    }
  }
`
