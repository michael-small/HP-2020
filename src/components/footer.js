/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const Footer = () => {
  return (<FooterWrapper>
    <div style={{
      display: "flex",
      padding: "65px 135px 120px",
      alignItems: "top"
    }}>
      <FooterGroup>
        <h1>Service</h1>
        <ul>
          <li><StyledLink>プロダクト</StyledLink></li>
          <li><StyledLink>プロダクト開発</StyledLink></li>
          <li><StyledLink>研究開発</StyledLink></li>
          <li><StyledLink>技術コンサルティング</StyledLink></li>
        </ul>
      </FooterGroup>
      <FooterGroup>
        <h1>Media</h1>
        <ul>
          <li><StyledLink>全て</StyledLink></li>
          <li><StyledLink>プロダクト</StyledLink></li>
          <li><StyledLink>研究開発</StyledLink></li>
          <li><StyledLink>技術コンサルティング</StyledLink></li>
        </ul>
      </FooterGroup>
      <FooterGroup>
        <h1>Company</h1>
        <ul>
          <li><StyledLink>ビジョン</StyledLink></li>
          <li><StyledLink>チーム</StyledLink></li>
          <li><StyledLink>バリュー</StyledLink></li>
          <li><StyledLink>会社概要</StyledLink></li>
        </ul>
      </FooterGroup>
      <FooterGroup>
        <h1>Career</h1>
      </FooterGroup>
      <FooterGroup>
        <h1>Contact</h1>
        <ul>
          <li><StyledLink>お問い合わせ</StyledLink></li>
        </ul>
      </FooterGroup>
      {/* <FooterGroup>
        <h1>NewsLetter</h1>
      </FooterGroup> */}
    </div>
    <FooterHr/>
    <div style={{height: 69,paddingTop: 30, paddingBottom: 24, paddingLeft: 150, paddingRight: 150, display: "flex"}}>
    <Copywrite>
      {`© ${new Date().getFullYear()}, Stake Technologies — All Rights Reserved`}
    </Copywrite>
    <PrivacyPolicy>
      プライバシーポリシー
    </PrivacyPolicy>
    <div style={{marginLeft: "auto"}}>
    </div>
    </div>
  </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: #1A1A1A 0% 0% no-repeat padding-box;
  color: #B2B2B2;
  letter-spacing: 0px;
  text-align: left;
`

const FooterGroup = styled.div`
  margin: 0px 15px 0px;
  letter-spacing: 0px;
  color: #FFFFFF;
  & h1{
    display: block;
    margin: 0px;
    font-weight: DemiBold;
    font: 22px/22px TT Commons;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
  }

  & ul{
    padding-top: 20px;
    list-style: none;
    margin: 0px;
    font: 14px/30px Noto Sans JP Regular;
    text-align: left;
  }
  & li{   
    padding: 0px;
    margin: 0px;
  }
`

const StyledLink = styled(Link)`
  &&{
    text-decoration: none;
    color: inherit;
    &:hover{
      text-decoration: underline;
    }
  }
`

const FooterHr = styled.hr`
  border: 1px solid #4E4E4E;
  margin: 0px;
`

const Copywrite = styled.span`
  font-weight: Regular;
  font: 15px/20px TT Commons;
  opacity: 1;
`

const PrivacyPolicy = styled(StyledLink)`
  && {
    margin-left: 20px;
    font-weight: Regular;
    font: 13px/17px Noto Sans JP Regular;
    opacity: 1;
  }
`

export default Footer;
