/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fetch = require(`node-fetch`)
const cheerio = require("cheerio")
const mediaJson = require("./content/media/media.json")
const { parse } = require("parse-open-graph")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const urls = mediaJson.media
  console.log(urls)

  const createOgFromUrl = async (url, id) => {
    const result = await fetch(url)
    const text = await result.text()
    const $ = cheerio.load(text)
    const meta = $("meta[property]")
      .map((i, el) => ({
        property: $(el).attr("property"),
        content: $(el).attr("content"),
      }))
      .get()
    const resultData = parse(meta)
    console.log(`fetched ${url}`)
    // create node for build time data example in the docs
    return createNode({
      //custom field
      og: resultData.og,
      // required fields
      id: id? id :resultData.og.url,
      parent: null,
      children: [],
      internal: {
        type: `MediaOg`,
        contentDigest: createContentDigest(resultData.og),
      },
    })
  }
//   for(item of urls) {
//     const url = item.url
//     console.log(await createOgFromUrl(url))
//   }
  await Promise.all(
    urls.map(async (item,index) => {
      const url = item.url
      await createOgFromUrl(url,index.toString())
    })
  )
}


