import { css } from "styled-components"

const theme = css`
  overflow: hidden;
  letter-spacing: 0px;
  padding-bottom: 100px;
  & h1 {
    display: inline-block;
    text-align: center;
    margin: 95px auto 0px;
    font: 60px/81px TT Commons;
    font-weight: Bold;
  }
  & p {
    text-align: left;
    margin: 25px 0px 0px;
    color: #7b7b7b;
    font: 16px/30px Noto Sans JP Regular;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    padding-bottom: 100px;
    & h1 {
      margin-top: 77px;
      font-size: 40px;
      line-height: 54px;
    }
    & p {
      margin-top: 20px;
      color: #7b7b7b;
      font-size: 15px;
      line-height: 26px;
    }
  }
`
export default theme
