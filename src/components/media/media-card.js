import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  IconButton,
} from "@material-ui/core"
import ExternalLink from "../../images/icons/external-link.inline.svg"

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
      font: "15px/28px Noto Sans JP Bold",
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
      <CardMedia
        fluid={node.featuredImg.childImageSharp.fluid}
        alt={node.og.title}
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
      <CardActions style={{ position: "absolute", bottom: 0, right: 0 }}>
        <a href={node.og.url} target="_blank" rel="noopener noreferrer">
          <IconButton>
            <ExternalLink />
          </IconButton>
        </a>
      </CardActions>
    </Card>
  )
}

const CardMedia = withTheme(
  styled(Image)(props => ({
    width: "100%",
    height: 180,
    [props.theme.breakpoints.down("xs")]: {
      height: 150,
    },
  }))
)

export default MediaCard
