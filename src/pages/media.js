import React from "react"
import {useLocalJsonForm} from "gatsby-tinacms-json"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import ComingSoon from "../components/coming-soon"
import { node } from "prop-types"

const MediaPage = (props) => {
  const [data] = useLocalJsonForm(props.data.mediaJson, formOptions)
  console.log(props.data)
  return <Layout>
    <SEO title="Service" />
    <NavBar />
    <ComingSoon />
  </Layout>
}

export const query = graphql`
  query {
    mediaJson {
      rawJson
      fileRelativePath
    }
  }
`

const formOptions = {
  fields: [
    {
      label: 'Media list List',
      name: 'rawJson.media',
      component: 'group-list',
      description: 'Media List',
      itemProps: item => ({
        key: item.id,
        label: item.url,
      }),
      defaultItem: () => ({
        name: 'New Author',
        id: Math.random()
          .toString(36)
          .substr(2, 9),
      }),
      fields: [
        {
          label: 'Url',
          name: 'url',
          component: 'text',
        },
      ],
    },
  ],
}

export default MediaPage