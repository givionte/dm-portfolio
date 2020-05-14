import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectsList from "./ProjectsList"
import styled from "styled-components"

const Projects = () => {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allContentfulDmPortfolioProjects {
        edges {
          node {
            title
            slug
            contentful_id
            featured
            preview {
              preview
            }
            images {
              fixed(width: 480) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <ProjectsList projects={projects} />
    </>
  )
}

export default Projects
