import { css } from "styled-components"

const theme = css`
   overflow: hidden;
   & h1 {
    display: inline-block;
    text-align: center;
    margin: 110px auto 0px;
    font: Bold 60px/81px TT Commons;
    letter-spacing: 0px;
    font-weight: Bold;
  }
  & h2 {
    display: inline;
    text-align: center;
    margin: 0px auto 0px;
    font: 30px/45px Noto Sans JP Bold;
  }
  & h3 {
    display: inline-block;
    text-align: center;
    margin: 59px auto 0px;
    font: 30px/45px Noto Sans JP Bold;
  }
  & h4 {
    text-align: center;
    margin: 0px;
    font: 16px/30px Noto Sans JP Regular;
  }
  & p {
    text-align: left;
    margin: 27px 0px 0px;
    color: #7b7b7b;
    font: 16px/30px Noto Sans JP Regular;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    & h1 {
      text-align: left;
      margin-top: 71px;
      font-size: 40px;
      line-height: 54px;
    }
    & h2 {
      display: block;
      text-align: left;
      font-size: 15px;
      line-height: 22px;
    }
    & h3 {
        font-size: 20px;
        line-height: 30px;
    }
  }
`
export default theme
