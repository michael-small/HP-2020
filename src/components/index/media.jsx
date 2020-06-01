import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import {
  withTheme,
  useTheme,
  useMediaQuery,
  withStyles,
} from "@material-ui/core"
import MuiPagination from "@material-ui/lab/Pagination"
import ArrowButton from "./arrowButton"
import MediaCard from "../media/media-card"
import _Container from "../container"
import SwipeableViews from "react-swipeable-views"

export default () => {
  const [cardIndex, setCardIndex] = React.useState(0)
  const theme = useTheme()
  const downXs = useMediaQuery(theme.breakpoints.down("xs"))

  const query = useStaticQuery(graphql`
    query {
      allMediaOg(sort: { fields: datetime, order: DESC }, limit: 4) {
        edges {
          node {
            datetime
            featuredImg {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            og {
              description
              title
              url
            }
          }
        }
      }
    }
  `)
  return (
    <Container>
      <h1>Media</h1>
      <CardView downXs={downXs} index={cardIndex} onChangeIndex={setCardIndex}>
        {query.allMediaOg.edges.map(edge => {
          const node = edge.node
          return (
            <div>
              <MediaCard
                node={node}
                key={edge.node.id}
                style={{ margin: downXs ? "0px auto 0px " : "0px 10px 0px" }}
              />
            </div>
          )
        })}
      </CardView>
      {downXs ? (
        <Pagination
          count={4}
          page={cardIndex + 1}
          onChange={(_, val) => setCardIndex(val - 1)}
        />
      ) : (
        []
      )}
      <ArrowButton
        to="/media"
        color="#1A1A1A"
        style={{ margin: "30px auto 0px" }}
      />
    </Container>
  )
}

const Container = withTheme(styled(_Container)`
  padding-bottom: 200px;
  text-align: center;
  font: 700 60px/81px TT Commons;
  color: #1a1a1a;
  & h1 {
    margin-top: 120px;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 40px;
    line-height: 54px;
    padding-bottom: 80px;
    & h1 {
      margin-top: 80px;
    }
  }
`)

const CardView = ({ downXs, ...props }) => {
  if (!downXs) {
    return <FlexContainer {...props} />
  } else {
    return <SwipeableViews enableMouseEvents {...props} />
  }
}

const Pagination = withStyles(theme => ({
  ul: {
    justifyContent: "center",
  },
  "@media (hover: none)" :{
    backgroundColor: "blue"
  }
}))(MuiPagination)

const FlexContainer = withTheme(styled.div`
margin-top: 40px;
display: flex;
flex: 0 0 auto;
justify-content: left;
overflow-x: scroll;
flex-wrap: nowrap;
`)
