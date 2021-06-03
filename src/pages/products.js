import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const products = () => (
    <StaticQuery query={categories} render={data=>{

      console.log(data.allMarkdownRemark.edges)
   

        // console.log(data)

                return (
                <Layout>
                    
                     {data.allMarkdownRemark.edges.map((tag ,index) => {
                       return(

                        <h1 key={tag.index}>{tag.node.frontmatter.title}</h1>

                       )
                   
                        
                        
                           
                    })}

                </Layout>
                )   
    }}/>
) 


export default products


const categories = graphql`
  query category{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/category/"}} 
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          
          excerpt
        }
      }
    }
  }`