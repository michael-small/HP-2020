/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled, { css } from "styled-components"
import Globe from "../images/icons/globe.inline.svg"
import StakeLogo from "../images/logo-slim.svg"
import Container from "./container"
import { StyledLink } from "./link"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Layout from "./layout"

const NavBar = ({ ...props }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  return matches ? <NavBarBig {...props} /> : <NavBarBig {...props} /> //dummy
}

const NavBarBig = ({ isTopPage, ...props }) => {
  return (
    <Wrapper isTopPage={isTopPage} {...props}>
      <FlexContainer isTopPage={isTopPage} gi>
        {!isTopPage ? (
          <Link
            to="/"
            style={{
              display: "block",
              height: "90%",
              margin: "auto auto auto 0px",
            }}
          >
            <img src={StakeLogo} style={{ height: "100%" }} />
          </Link>
        ) : (
          []
        )}
        <FlexEnd>
          <NavItem>
            <Link to="/service">Service</Link>
          </NavItem>
          <NavItem>
            <Link to="/media">Media</Link>
          </NavItem>
          <NavItem>
            <Link to="/company">Company</Link>
          </NavItem>
          <NavItem>
            <Link to="/career">Career</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
          <Line />
          <NavItem style={{ minWidth: 74, whiteSpace: "nowrap" }}>
            <Link to="/">
              <Globe
                height="16px"
                style={{
                  fill: "currentColor",
                  display: "inline",
                  verticalAlign: "top",
                  marginRight: "6px",
                }}
              />
              English
            </Link>
          </NavItem>
        </FlexEnd>
      </FlexContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  // position: relative;
  width: 100%;
  height: 60px;
`

const FlexContainer = styled(Container)`
  ${props =>
    props.isTopPage
      ? css`
          color: #ffffff;
        `
      : css`
          background-color: #ffffff;
          color: #1a1a1a;
          position: fixed;
          z-index: 1100;
        `}
  box-shadow: 0 4px 10px -10px #000;
  display: flex;
  height: 60px;
  margin: 0 auto 0;
`

const FlexEnd = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
`

const NavItem = styled.div`
  margin: 24px 20px 17px;
  font: 18px TT Commons;
`

const Line = styled.div`
  display: inline-block;
  background-color: #cccccc;
  margin: auto 0px;
  height: 21px;
  width: 1px;
`

const Link = styled(StyledLink)`
  && {
    vertical-align: top;
  }
`
export default NavBar
