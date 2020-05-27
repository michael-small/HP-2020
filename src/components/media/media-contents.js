import React, { useState } from "react"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import { graphql, useStaticQuery } from "gatsby"

const MediaContents = props => {
  const query = useStaticQuery(graphql`
    query {
      mediaJson {
        rawJson
        fileRelativePath
      }
      allMediaOg {
        edges {
          node {
            og {
              description
              image {
                url
              }
              title
              url
            }
          }
        }
      }
    }
  `)

  useLocalJsonForm(query.mediaJson, formOptions)

  return (
    <>
      {query.allMediaOg.edges.map(edge => {
        const og = edge.node.og;
        return(
        <div key={edge.node.id}>
          <MediaCard og={og} />
        </div>
      )})}
    </>
  )
}

const MediaCard = ({og}) => {
  // console.log(og.image[0].url)
  return (
    <div>
      <a href={og.url}>
      <img src={og.image[0].url} alt={og.image[0].url} height="100px"/>
      <h1>{og.title}</h1>
      </a>
    </div>
  )
}

const formOptions = {
  fields: [
    {
      label: "Media Url List",
      name: "rawJson.media",
      component: "group-list",
      itemProps: item => ({
        label: item.url,
      }),
      defaultItem: () => ({
        url: "https://",
      }),
      fields: [
        {
          label: "Url",
          name: "url",
          component: "text",
        },
      ],
    },
  ],
}

export default MediaContents
