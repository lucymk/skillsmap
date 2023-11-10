import { graphql } from 'gatsby'

// need to make this table on the spreadsheet
const getAllSubjects = graphql`
  query {
    allAirtable(filter: { queryName: { eq: "Subjects" } }) {
      nodes {
        data {
          Subject
        }
      }
    }
  }
`

// ideally, we would only get the relevant skills for the selected subjects but the closest I can get
// is a skill which is used in ANY of those subjects. So for now, let's fetch all and filter in the JS
const getAllSkills = graphql`
  query {
    allAirtable(filter: { queryName: { eq: "Skills" } }) {
      nodes {
        data {
          Subject
          Skill
        }
      }
    }
  }
`

const getSkill = graphql`
  query getSkill($skill: String!) {
    allAirtable(
      filter: { queryName: { eq: "Skills" }, data: { Skill: { eq: $skill } } }
    ) {
      nodes {
        data {
          WorkplaceExample1
          WorkplaceExample2
          WorkplaceExample3
          WorkplaceExample4
          Cluster
          Category
          SkillDefinition
        }
      }
    }
  }
`

const getAllCategories = graphql`
  query {
    allAirtable(filter: { queryName: { eq: "Categories" } }) {
      nodes {
        data {
          Category
        }
      }
    }
  }
`

const getCategory = graphql`
  query getCategory($category: String!) {
    category: allAirtable(
      filter: {
        queryName: { eq: "Categories" }
        data: { Category: { eq: $category } }
      }
    ) {
      nodes {
        data {
          CategoryDefinition
          CategoryWorkplaceUse
        }
      }
    }

    skillsInCategory: allAirtable(
      filter: {
        queryName: { eq: "Skills" }
        data: { Category: { eq: $category } }
      }
    ) {
      nodes {
        data {
          Skill
        }
      }
    }
  }
`

const getAllClusters = graphql`
  query {
    allAirtable(filter: { queryName: { eq: "Clusters" } }) {
      nodes {
        data {
          Cluster
        }
      }
    }
  }
`

const getCluster = graphql`
  query getCluster($cluster: String!) {
    cluster: allAirtable(
      filter: {
        queryName: { eq: "Clusters" }
        data: { Cluster: { eq: $cluster } }
      }
    ) {
      nodes {
        data {
          ClusterDefinition
          ClusterWorkplaceUse
        }
      }
    }
    skillsInCluster: allAirtable(
      filter: {
        queryName: { eq: "Skills" }
        data: { Cluster: { eq: $cluster } }
      }
    ) {
      nodes {
        data {
          Skill
        }
      }
    }
  }
`
