import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { repositoryConfigs } from '../utils/prismicPreviews'

import { Layout } from '../components/Layout'
import { BlogPosts } from '../components/BlogPosts'

export const query = graphql`
  query MyQuery {
    prismicBloghome {
      data {
        description {
          raw
        }
        headline {
          raw
        }
        image {
          url
        }
      }
    }
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            date
            body {
              ... on PrismicPostDataBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Homepage = ({ data }) => {
  if (!data) return null
  const home = data.prismicBloghome.data
  const posts = data.allPrismicPost.edges

  const avatar = {backgroundImage: `url(${home.image.url})`}
  return (
    <Layout>
      <div className="home-header container" data-wio-id={home.id}>
        <div className="blog-avatar" style={avatar} />
        <h1>{RichText.asText(home.headline.raw)}</h1>
        <p className="blog-description">{RichText.asText(home.description.raw)}</p>
      </div>
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default withPrismicPreview(Homepage, repositoryConfigs)
