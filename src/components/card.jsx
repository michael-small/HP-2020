import styled from "styled-components"
import { withTheme } from "@material-ui/core"

const marginBetweenCard = 25

const Card = styled.div`
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 12px #0000001a;

  width: 300px;
  height: 330px;
  border-radius: 4px;
  margin-left: ${marginBetweenCard}px;
  margin-right: ${marginBetweenCard}px;
  margin-bottom: ${marginBetweenCard}px;
`

const Logo = styled.span`
  display: inline-block;
  margin-bottom: 13px;
  width: 100%;
  text-align: center;
  font: Bold 28px/34px Orbitron;
  letter-spacing: 0px;
  color: ${props => props.color || "#1A1A1A"};
  opacity: 1;
`

const CardContent = styled.div`
  position: absolute;
  top: 175px;
  left: 0px;
  right: 0px;
  margin: auto;
  padding-left: 23px;
  padding-right: 23px;
  text-align: center;
  font-weight: 500;
  font: 14px/24px Noto Sans JP;
  letter-spacing: 0px;
  color: #7b7b7b;
  opacity: 1;
`

const CardContainer = withTheme(
  styled.div(
    ({ theme }) => `
  margin-left: ${-marginBetweenCard}px;
  margin-right: ${-marginBetweenCard}px;
  margin-bottom: ${-marginBetweenCard}px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  ${theme.breakpoints.down("xs")} {
    flex-direction: column;
    align-items: center;
  }
`
  )
)

export { CardContainer, Card, CardContent, Logo }
