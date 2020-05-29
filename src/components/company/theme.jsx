import { css } from "styled-components"

const theme = css`
  overflow: hidden;
  & h1 {
    text-align: center;
    margin: 110px auto 0px;
    font: 60px/81px TT Commons;
    letter-spacing: 0px;
    font-weight: Bold;
  }
  & h2 {
    margin: 54px auto 0px;
    font: 38px/52px TT Commons;
    font-weight: 600;
  }
  & h3 {
    margin: 59px auto 0px;
    font: 700 35px/52px Noto Sans JP;
  }
  & p {
    margin: 38px auto 0px 0px;
    color: #7b7b7b;
    font: 16px/30px Noto Sans JP;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    & h1 {
      margin-top: 71px;
      font-size: 40px;
      line-height: 54px;
    }
    & h2 {
      margin-top: 21px;
      font-size: 26px;
      line-height: 35px;
    }
    & h3 {
      margin-top: 20px;
      font-size: 24px;
      line-height: 36px;
    }
    & p {
      margin-top: 20px;
      font-size: 15px;
    }
  }
`
export default theme
