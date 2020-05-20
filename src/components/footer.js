/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { StyledLink as Link } from "./link"

const Footer = () => {
  return (
    <FooterWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "65px 135px 70px",
          alignItems: "top",
        }}
      >
        <FooterGroup>
          <h1>
            <Link to="/service">Service</Link>
          </h1>
          <ul>
            <li>
              <Link to="/service/#products">プロダクト</Link>
            </li>
            <li>
              <Link to="/service/#development">プロダクト開発</Link>
            </li>
            <li>
              <Link to="/service/#rd">研究開発</Link>
            </li>
            <li>
              <Link to="/service/#consulting">技術コンサルティング</Link>
            </li>
          </ul>
        </FooterGroup>
        <FooterGroup>
          <h1>
            <Link to="/media">Media</Link>
          </h1>
          <ul>
            <li>
              <Link>全て</Link>
            </li>
            <li>
              <Link>プロダクト</Link>
            </li>
            <li>
              <Link>研究開発</Link>
            </li>
            <li>
              <Link>技術コンサルティング</Link>
            </li>
          </ul>
        </FooterGroup>
        <FooterGroup>
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
        </FooterGroup>
        <FooterGroup>
          <h1>
            <Link to="/career">Career</Link>
          </h1>
        </FooterGroup>
        <FooterGroup>
          <h1>
            <Link to="/contact">Contact</Link>
          </h1>
          <ul>
            <li>
              <Link to="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </FooterGroup>
        {/* <FooterGroup>
        <h1>NewsLetter</h1>
      </FooterGroup> */}
      </div>
      <FooterHr />
      <div
        style={{
          height: 69,
          paddingTop: 30,
          paddingBottom: 24,
          paddingLeft: 150,
          paddingRight: 150,
          display: "flex",
        }}
      >
        <Copywrite>
          {`© ${new Date().getFullYear()}, Stake Technologies — All Rights Reserved`}
        </Copywrite>
        <PrivacyPolicy to="/privacy-policy">プライバシーポリシー</PrivacyPolicy>
        <div style={{ marginLeft: "auto" }}></div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: #1a1a1a 0% 0% no-repeat padding-box;
  color: #b2b2b2;
  white-space: nowrap;
  letter-spacing: 0px;
  text-align: left;
`

const FooterGroup = styled.div`
  margin: 0px 15px 50px;
  letter-spacing: 0px;
  color: #ffffff;
  & h1 {
    display: block;
    margin: 0px;
    font: 600 22px/22px TT Commons;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }

  & ul {
    padding-top: 20px;
    list-style: none;
    margin: 0px;
    font: 14px/30px Noto Sans JP Regular;
    text-align: left;
  }
  & li {
    padding: 0px;
    margin: 0px;
  }
`

const FooterHr = styled.hr`
  border: 1px solid #4e4e4e;
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
