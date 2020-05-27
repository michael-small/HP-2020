/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { Box, withTheme } from "@material-ui/core"
import Container from "./container"
import { StyledLink as Link } from "./link"

const Footer = () => {
  return (
    <FooterBg>
      <FooterWrapperTop>
        <FooterFlexContainer>
          <FooterItem>
            <h1>
              <Link to="/service">Service</Link>
            </h1>
            <ul>
              <li>
                <Link to="/service#products">プロダクト</Link>
              </li>
              <li>
                <Link to="/service#development">プロダクト開発</Link>
              </li>
              <li>
                <Link to="/service#rd">研究開発</Link>
              </li>
              <li>
                <Link to="/service#consulting">技術コンサルティング</Link>
              </li>
            </ul>
          </FooterItem>
          <FooterItem>
            <h1>
              <Link to="/media">Media</Link>
            </h1>
            <ul>
              <li>
                <Link to="/media">全て</Link>
              </li>
              <li>
                <Link to="/media">プロダクト</Link>
              </li>
              <li>
                <Link to="/media">研究開発</Link>
              </li>
              <li>
                <Link to="/media">技術コンサルティング</Link>
              </li>
            </ul>
          </FooterItem>
          <FooterItem>
            <h1>
              <Link to="/company">Company</Link>
            </h1>
            <ul>
              <li>
                <Link to="/company#vision">ビジョン</Link>
              </li>
              <li>
                <Link to="/company#team">チーム</Link>
              </li>
              <li>
                <Link to="/company#value">バリュー</Link>
              </li>
              <li>
                <Link to="/company#about">会社概要</Link>
              </li>
            </ul>
          </FooterItem>
          <FooterItem>
            <h1>
              <Link to="/career">Career</Link>
            </h1>
          </FooterItem>
          <FooterItem>
            <h1>
              <Link to="/contact">Contact</Link>
            </h1>
            <ul>
              <li>
                <Link to="/contact">お問い合わせ</Link>
              </li>
            </ul>
          </FooterItem>
        </FooterFlexContainer>
      </FooterWrapperTop>
      <FooterHr />
      <FooterWrapperBottom>
        <div style={{}}>
          <Copywrite>
            {`© ${new Date().getFullYear()}, Stake Technologies — All Rights Reserved`}
          </Copywrite>
          <PrivacyPolicy to="/privacy-policy">
            プライバシーポリシー
          </PrivacyPolicy>
          <div style={{ marginLeft: "auto" }}></div>
        </div>
      </FooterWrapperBottom>
    </FooterBg>
  )
}

const FooterBg = styled.div`
  background-color: #1a1a1a;
  color: #b2b2b2;
  letter-spacing: 0px;
  text-align: left;
`

const FooterWrapperTop = styled(Container)`
  padding-top: 65px;
  padding-bottom: 120px;
`

const FooterWrapperBottom = styled(Container)`
  // height: 69px;
  padding-top: 30px;
  padding-bottom: 24px;
`

const FooterFlexContainer = styled(Box).attrs(props => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  ...props,
}))``

const FooterItem = withTheme(
  styled(Box).attrs({
    item: true,
  })(
    ({ theme }) => `
    padding: ${theme.spacing(3)}px;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    white-space: nowrap;
    & h1 {
      display: block;
      margin: 0px;
      font: 600 22px/22px TT Commons;
    }
    & ul {
      padding-top: 20px;
      list-style: none;
      font: 14px/30px Noto Sans JP Regular;
      text-align: left;
    }
  `
  )
)

const FooterHr = styled.hr`
  border: 1px solid #4e4e4e;
  width: 100vw;
  margin: 0px;
`

const Copywrite = styled.span`
  font: 15px/20px TT Commons;
  opacity: 1;
`

const PrivacyPolicy = styled(Link)`
  && {
    margin-left: 20px;
    font: 13px/17px Noto Sans JP Regular;
    opacity: 1;
  }
`

export default Footer
