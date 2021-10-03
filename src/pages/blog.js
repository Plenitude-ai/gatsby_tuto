import React from 'react'
import Layout from '../components/layout'
// import { useStaticQuery, graphql } from 'gatsby'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
    return  <Layout pageTitle="Blog Page">
                <p>My cool posts will go in here</p>
                <p>The list of my blog posts : </p>
                <ul>{data.allFile.nodes.map(node => (
                        <li key={node.name}> {node.name} </li> )
                        )}
                </ul>
            </Layout>
}

export const query = graphql`
    query {
        allFile {
        nodes {
            name
            }
        }
    }
    `

export default BlogPage