import React from "react"
import Image from "../image"
import styled from "styled-components"
import { withTheme, useTheme, useMediaQuery } from "@material-ui/core"
import ArrowButton from "../arrowButton"
import localTheme from "./theme"
import _Container from "../container"
import { StyledLink as Link } from "../link"
import { CardContainer, Card, CardContent, Logo } from "../card"
import ProductCards from "../product-cards"

export default ({ ...props }) => {
  const theme = useTheme()
  const downXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Container {...props}>
      <h1>Products</h1>
      <ProductCards style={{ marginTop: downXs ? "19px" : "" }} />
      <Link to="/contact">
        <ArrowButton label="お問い合わせ" style={{ margin: "50px auto 0px" }} />
      </Link>
    </Container>
  )
}

const Container = withTheme(
  styled(_Container)`
    ${localTheme}
    padding-bottom: 106px;
    background-color: #f5f5f5;
    letter-spacing: 0px;
    color: #1a1a1a;
    width: 100%;
    & h1 {
      display: block;
    }
    ${props => props.theme.breakpoints.down("xs")} {
      padding-bottom: 81px;
      & h1 {
        text-align: center;
      }
    }
  `
)
