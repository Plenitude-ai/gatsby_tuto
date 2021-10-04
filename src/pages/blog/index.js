import React from 'react'
import Layout from '../../components/layout'
import {  Link, graphql } from 'gatsby' //Link,
import {navLinkText} from '../../components/layout.module.css'

const BlogPage = ({data}) => {
    return  <Layout pageTitle="Blog Page">
                {data.allMdx.nodes.map(node => (
                        <article key={node.id}> 
                            <h2>{node.frontmatter.title}</h2>
                            <Link to={`/blog/${node.slug}`} className={navLinkText}>{node.frontmatter.title}</Link>
                            <p>Posted on : {node.frontmatter.date}</p>
                        </article> )
                )}
            </Layout>
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage