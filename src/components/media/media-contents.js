import React from "react"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  makeStyles,
  IconButton,
  withTheme,
} from "@material-ui/core"
import ExternalLink from "../../images/icons/external-link.inline.svg"
import _Container from "../container"

const MediaContents = props => {
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
        {query.allMediaOg.edges.map(edge => {
          const node = edge.node
          return <MediaCard node={node} key={edge.node.id} />
        })}
      </GridContainer>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#F5F5F5",
    margin: "0px auto auto",
    position: "relative",
    maxWidth: 350,
    minHeight: 370,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 300,
    },
  },
  content: {
    "& h4": {
      font: "18px/28px Noto Sans JP Bold",
    },
    "& p": {
      marginTop: "11px",
      font: "18px/30px TT Commons",
      color: "#7B7B7B",
    },
    [theme.breakpoints.down("xs")]: {
      "& p": {
        fontSize: "15px",
        lineHeight: "25px",
      },
    },
  },
  media: {
    height: 180,
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },
}))

const MediaCard = ({ node }) => {
  const classes = useStyles()

  // console.log(node.og.image[0].url)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={node.og.image[0].url}
          title={node.og.title}
        />
        <CardContent className={classes.content}>
          <h4>{node.og.title}</h4>
          <p>
            {(datetime => {
              const date = new Date(datetime)
              return date.toLocaleDateString()
            })(node.datetime)}
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ position: "absolute", bottom: 0, right: 0 }}>
        <a href={node.og.url}>
          <IconButton>
            <ExternalLink />
          </IconButton>
        </a>
      </CardActions>
    </Card>
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
      font-weight: 54px;
    }
  }
`)

export default MediaContents
