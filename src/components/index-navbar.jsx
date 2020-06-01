import React from "react"
import styled, { css } from "styled-components"
import AngleDown from "../images/icons/arrow-down.inline.svg"
import Container from "./container"
import { StyledLink as Link } from "./link"
import { useTheme, useMediaQuery } from "@material-ui/core"

/*
[
  {
    to:"/service#products",
    label:"プロダクト",
  },
  ...
]
*/

export default ({ labels, ...props }) => {
  if (!!labels)
    return (
      <div>
        <Wrapper>
          {/* <NavLine/> */}
          {labels.map((item, index) => (
            <>
              <NavLabel to={item.to} key={index}>
                {item.label}
              </NavLabel>
              {/* <NavLine /> */}
            </>
          ))}
        </Wrapper>
      </div>
    )
}

const Wrapper = styled(Container)`
  && {
    width: 100%;
    padding-top: 46px;
    padding-bottom: 44px;
    min-height: 140px;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    justify-content: safe center;
    align-items: center;
    overflow: hidden;
  }
`
const NavLabel = ({ children, ...props }) => {
  const theme = useTheme()
  const downXs = useMediaQuery(theme.breakpoints.down("xs"))

  const NavLabelWrapper = styled.div`
    white-space: nowrap;
    margin: 0px 0px 0px -2px;
    height: 40px;
    text-align: center;
    font: 16px/16px Noto Sans JP;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 50px;
    padding-right: 50px;
    border-left: solid 2px #a0a0a0;
    border-right: solid 2px #a0a0a0;
  `

  const LinkCss = css`
    margin-bottom: 5px;
    width: ${downXs ? "50%" : "auto"};
  `

  return (
    <Link {...props} css={LinkCss}>
      <NavLabelWrapper>{children}</NavLabelWrapper>
      <AngleDown css="fill: currentColor; margin: 0 auto 0; display: block" />
    </Link>
  )
}

// const NavLabel = styled.div`
//   margin: auto 0;
//   height: 40px;
//   text-align: center;
//   font: 16px/16px Noto Sans JP;
//   padding-left: 50px;
//   padding-right: 50px;
// `
