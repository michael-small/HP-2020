import React from "react"
import Image from "../image"
import styled from "styled-components"
import ArrowButton from "../arrowButton"
import _Container from "../container"
import { StyledLink as Link } from "../link"
import { CardContainer, Card, CardContent, Logo } from "../card"
import ProductCards from "../product-cards"

export default ({ ...props }) => {
  return (
    <Container {...props}>
      <h1>Products</h1>
      <ProductCards />
      <Link to="/contact">
        <ArrowButton label="お問い合わせ" style={{ margin: "50px auto 0px" }} />
      </Link>
    </Container>
  )
}

const Container = styled(_Container)`
  padding-top: 110px;
  padding-bottom: 106px;
  background-color: #f5f5f5;
  letter-spacing: 0px;
  color: #1a1a1a;
  width: 100%;
  & h1 {
    text-align: center;
    margin: 0px auto 0px;
    font: Bold 60px/81px TT Commons;
    font-weight: Bold;
  }
`
