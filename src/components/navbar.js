/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
  return (<Wrapper>
    <FlexEnd>
      <NavItem>Service</NavItem>
      <NavItem>Media</NavItem>
      <NavItem>Company</NavItem>
      <NavItem>Contact</NavItem>
      <Line />
      <NavItem>
        <FontAwesomeIcon icon={faGlobe} style={{ marginTop: -4, fontSize: 15, marginRight: "6px" }} />
        English
      </NavItem>
      </FlexEnd>
  </Wrapper>
  )
}

const FlexEnd = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
`

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  padding-left: 150px;
  padding-right: 145px;
  background: #FFFFFF 0% 0% no-repeat padding-box
  letter-spacing: 0px;
  color: #1A1A1A;
  opacity: 1;
`

const NavItem = styled.div`
  margin: 25px 20px 17px;
  font: 18px/12px TT Commons;
`

const Line = styled.div`
  background-color: #cccccc;
  margin: auto 0px;
  height: 21px;
  width: 1px;
`

export default NavBar;
