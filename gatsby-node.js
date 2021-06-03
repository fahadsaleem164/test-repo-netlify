const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {

    console.log(createFilePath({ node, getNode, basePath: `pages` }))

    const slug = createFilePath({ node, getNode, basePath: `pages` })
    
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions

    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
                frontmatter {
                    title
                }
            
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    // console.log(result.data.allMarkdownRemark.edges[0].node)

    // result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    //     console.log(node.frontmatter.title)

    //   createPage({

    //     path: node.frontmatter.title,
    //     component: path.resolve(`src/pages/single_product.js`),
    //     context: {
    //       slug: node.fields.slug,
    //     },

    //   })
      
    // })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

        console.log(node.frontmatter.title)

      createPage({

        path: node.fields.slug,
        component: path.resolve(`src/pages/single_product.js`),
        context: {
          slug: node.fields.slug,
        },

      })
      
    })




  }