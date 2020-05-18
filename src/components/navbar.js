/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import Globe from "../images/icons/globe.inline.svg"
import StakeLogo from "../images/logo-slim.svg"
import { StyledLink } from "./link"
import { navigate } from "gatsby"

const NavBar = ({ isTopPage }) => {
  return (
    <Wrapper>
    <FlexContainer isTopPage={isTopPage}>
      {!isTopPage ? (
        <Link
          to="/"
          style={{
            display: "block",
            width: "250px",
            height: "49px",
            margin: "auto 0 auto",
          }}
        >
          <img src={StakeLogo} />
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
        <NavItem style={{ minWidth: 74, whiteSpace: "nowrap"}}>
          <Link to="/">
          <Globe height="16px" style={{ fill: "currentColor", display: "inline",verticalAlign: "top",marginRight: "6px" }}/>
          English
          </Link>
        </NavItem>
      </FlexEnd>
    </FlexContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: static;
  width: 100%;
  height: 60px;
`

const FlexContainer = styled.div`
  display: flex;
  height: 60px;
  box-sizing: content-box;
  padding-left: 150px;
  padding-right: 150px;
  max-width: max(calc(100% - 300px), 900px);
  left: 0px;
  right: 0px;
  margin: 0 auto 0;
  letter-spacing: 0px;
  overflow: scroll;
  opacity: 1;
  ${props =>
    props.isTopPage
      ? `color: #FFFFFF;`
      : `position: fixed;
    z-index: 1;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    color: #1A1A1A;`
  }
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
  &&{
    vertical-align: top;
  }
`
export default NavBar
