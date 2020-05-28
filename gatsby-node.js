/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fetch = require(`node-fetch`)
const cheerio = require("cheerio")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
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

      console.log(`fetched ${imageUrl}`)
    }

    // create node for build time data example in the docs
    return createNode({
      //custom field
      og: resultData.og,
      featuredImg___NODE: fileNode.id,
      datetime,
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
