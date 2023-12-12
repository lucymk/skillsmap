import * as React from 'react'
import { graphql } from 'gatsby'
import { SkillsButtons } from '../../../components/buttons'
import Breadcrumbs from '../../../components/breadcrumbs'
import { ClusterCategoryDefinitionCard } from '../../../components/clusterCategory'
import Layout from '../../../components/layout'
import { H1, Copy } from '../../../components/shared'

const getClusterFromSearchQuery = ({ href }) =>
  href && href.replaceAll('/', '').split('clusters')[1]

const ClusterPage = ({
  data: {
    clusters: { nodes: clustersData },
    skills: { nodes: skills },
  },
  location: { href },
}) => {
  const cluster = getClusterFromSearchQuery({ href })

  const clusterMatches = clustersData.filter(
    ({ data: { Cluster } }) => Cluster.replaceAll(' ', '+') === cluster
  )

  if (clusterMatches.length === 0) {
    typeof window !== 'undefined' && window.location.replace('/404/')
    return <main />
  }

  const {
    data: {
      Cluster: clusterMatch,
      ClusterDefinition: clusterDefinition,
      ClusterWorkplaceUse: clusterWorkplaceUse,
    },
  } = clusterMatches[0]

  const associatedSkills = skills
    .filter(({ data: { Cluster } }) => {
      return Cluster === clusterMatch
    })
    .map(({ data: { Skill } }) => Skill)

  return (
    <Layout>
      <Breadcrumbs
        crumbs={[
          { label: 'SkillsMap® Tool', path: '/skillsmapTool' },
          {
            label: 'Clusters',
          },
          { label: `${clusterMatch}` },
        ]}
      />
      <H1>{clusterMatch}</H1>
      <Copy>
        <ClusterCategoryDefinitionCard
          cluster={true}
          category={false}
          definition={clusterDefinition}
          workplaceUse={clusterWorkplaceUse}
          style={{ backgroundColor: 'var(--light-green-faint)' }}
        />
        <h3>
          Skills in the{' '}
          <span style={{ backgroundColor: 'var(--light-green-faint)' }}>
            {clusterMatch}
          </span>{' '}
          cluster:
        </h3>
        <SkillsButtons fromSearch={false} skillsArray={associatedSkills} />
      </Copy>
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
