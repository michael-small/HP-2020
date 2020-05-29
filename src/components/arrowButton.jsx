import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import ArrowRight from "../images/icons/arrow-right.inline.svg"

export default ({ to, label, ...props }) => {
  return (
    <ButtonRect
      onClick={() => {
        if (to) {
          navigate(to)
        }
      }}
      {...props}
    >
      <ButtonLabel style={{ opacity: 1 }}>
        {label}
        <ArrowRightIcon />
      </ButtonLabel>
    </ButtonRect>
  )
}

export const ArrowRightIcon = styled(ArrowRight).attrs({
  height: "1em",
  width: "1em",
  preserveAspectRatio: "xMinYMin slice",
  overflow: "visible",
})`
  display: inline;
  fill: currentColor;
  vertical-align: -0.15em;
  margin: auto auto auto 0.5em;
`

export const ButtonRect = styled.div(
  props => `
  width: ${props.width || "300px"};
  height: ${props.height || "70px"};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props.backgroundColor || "#1A1A1A"};
  border: ${props.border || ""};
  color: ${props.color || "#FFFFFF"};
  opacity: 1;
  font-weight: ${props.lang === "en" ? 500 : "Normal"};
  font-family: ${props.lang === "en" ? "TT Commons" : "Noto Sans JP"};
  font-size: ${props.lang === "en" ? "1.6rem" : "2.2rem"};
`
)

export const ButtonLabel = styled.div`
  display: inline;
  margin: auto 0 auto;
  text-align: center;
  letter-spacing: 0px;
  white-space: nowrap;
  font: inherit;
  opacity: 1;
`
