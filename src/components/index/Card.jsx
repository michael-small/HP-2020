import styled from "styled-components"

const marginBetweenCard = 25;

const Card=styled.div`
  position: relative;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 12px #0000001A;

  width: 300px;
  min-height: 330px;
  border-radius: 4px;
  margin: ${marginBetweenCard}px;
`

const Logo=styled.span`
  display: inline-block;
  margin-bottom: 13px;
  width: 100%;
  text-align: center;
  font: Bold 28px/34px Orbitron;
  letter-spacing: 0px;
  color: ${props => props.color || "#1A1A1A"};
  opacity: 1;
`

const CardContent=styled.div`
  position: absolute;
  top: 175px;
  left: 0px;
  right: 0px;
  margin: auto;
  padding-left: 23px;
  padding-right: 23px;
  text-align: center;
  font-weight: Regular;
  font: 14px/24px Noto Sans JP Regular;
  letter-spacing: 0px;
  color: #7B7B7B;
  opacity: 1;
`

const CardContainer=styled.div`
  margin-top: ${62-marginBetweenCard}px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  // margin-top: 62px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export { CardContainer, Card, CardContent, Logo };