/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fetch = require(`node-fetch`)
const path = require(`path`)
const cheerio = require("cheerio")
const {
  createRemoteFileNode,
  createFilePath,
} = require(`gatsby-source-filesystem`)
const { parse } = require("parse-open-graph")
const mediaJson = require("./content/media/media.json")

exports.sourceNodes = async ({
  actions: { createNode, createNodeField },
  cache,
  store,
  createContentDigest,
  createNodeId,
}) => {
  // get data from GitHub API at build time
  const urls = mediaJson.media

  const createOgFromUrl = async url => {
    const result = await fetch(url)
    const text = await result.text()
    const $ = cheerio.load(text)
    const datetime = $("#main").find("time").attr("datetime")
    const meta = $("meta[property]")
      .map((i, el) => ({
        property: $(el).attr("property"),
        content: $(el).attr("content"),
      }))
      .get()
    const resultData = parse(meta)
    const id = createNodeId(url)

    // fetch Image
    let fileNode
    const imageUrl =
      resultData.og &&
      resultData.og.image &&
      resultData.og.image[0] &&
      resultData.og.image[0].url
    if (imageUrl) {
      fileNode = await createRemoteFileNode({
        url: imageUrl,
        cache,
        store,
        createNode,
        createNodeId,
      })

      // console.log(`fetched ${imageUrl}`)
    }

    // create node for build time data example in the docs
    return createNode({
      //custom field
      og: resultData.og,
      featuredImg___NODE: fileNode.id,
      datetime: new Date(datetime).toISOString(),
      // required fields
      id,
      parent: null,
      children: [],
      internal: {
        type: `MediaOg`,
        contentDigest: createContentDigest(resultData.og),
      },
    })
  }

  await Promise.all(
    urls.map(async item => {
      const url = item.url
      await createOgFromUrl(url)
    })
  )
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const newsPost = path.resolve(`./src/templates/news-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create news posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: newsPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const relativePath = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/news${relativePath}`,
    })
  }
}
