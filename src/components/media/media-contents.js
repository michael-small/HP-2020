import React from "react"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import MediaCard from "./media-card"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import {
  ButtonRect as _ButtonRect,
  ButtonLabel as _ButtonLabel,
} from "../arrowButton"
import { makeStyles, withTheme } from "@material-ui/core"
import _Container from "../container"
import LoadIcon from "../../images/icons/load.inline.svg"

const GroupItems = 12

const MediaContents = props => {
  const [readGroupCount, setReadGroupCount] = React.useState(1)
  function handleReadGroup() {
    setReadGroupCount(count => count + 1)
  }

  const query = useStaticQuery(graphql`
    query {
      mediaJson {
        rawJson
        fileRelativePath
      }
      allMediaOg(sort: { fields: datetime, order: DESC }) {
        edges {
          node {
            datetime
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
    <Container>
      <h1>Media</h1>
      <GridContainer>
        {query.allMediaOg.edges
          .slice(0, readGroupCount * GroupItems)
          .map(edge => {
            const node = edge.node
            return <MediaCard node={node} key={edge.node.id} />
          })}
      </GridContainer>
      {readGroupCount * GroupItems < query.allMediaOg.edges.length ? (
        <ButtonRect onClick={handleReadGroup}>
          <ButtonLabel>
            <LoadLeftIcon />
            さらに読み込む
          </ButtonLabel>
        </ButtonRect>
      ) : (
        []
      )}
    </Container>
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

const GridContainer = withTheme(styled.div`
  display: grid;
  grid-gap: 40px;
  letter-spacing: 0px;
  margin: 80px auto 2em;
  overflow-y: visible;
  grid-auto-rows: auto;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  ${props => props.theme.breakpoints.down("xs")} {
    margin-top: 50px;
  }
`)

const Container = withTheme(styled(_Container)`
  h1 {
    margin-top: 80px;
    text-align: center;
    font: 60px/81px TT Commons;
    font-weight: Bold;
    color: #1a1a1a;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    h1 {
      margin-top: 50px;
      font-size: 40px;
      line-height: 54px;
    }
  }
`)

const ButtonRect = styled(_ButtonRect)`
  width: 200px;
  height: 46px;
  border: 1px solid #1a1a1a;
  margin: 46px auto 100px;
  background-color: #ffffff;
  color: #1a1a1a;
`

const ButtonLabel = styled(_ButtonLabel)`
  font: 15px/12px Noto Sans JP Regular;
`
export const LoadLeftIcon = styled(LoadIcon).attrs({
  height: "1em",
  width: "1em",
  preserveAspectRatio: "xMinYMin slice",
  overflow: "visible",
})`
  display: inline;
  fill: currentColor;
  vertical-align: -0.15em;
  margin: auto 0.5em auto auto;
`

export default MediaContents
