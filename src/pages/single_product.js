import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const single_product = ({data}) => {

        console.log(data)

        return (

                <Layout>
                        <h1>Single Product</h1>
                </Layout>
                
        )
   
               
                
   
        }


export default single_product


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`


