import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link, navigate } from "gatsby"

export const ArrowButton = ({
  lang,
  label,
  to,
  backgroundColor,
  color,
  ...props
}) => {
  return (
    <ButtonRect
      lang={lang}
      color={color}
      {...props}
      onClick={() => navigate(to)}
    >
      <ButtonLabel>{label}</ButtonLabel>
      <FontAwesomeIcon
        style={{ position: "absolute", top: "26px", right: "34px" }}
        icon={faArrowRight}
      />
    </ButtonRect>
  )
}

const ButtonRect = styled.div`
  width: 300px;
  height: 70px;
  position: relative;
  cursor: pointer;
  background-color: ${props => props.backgroundColor || "#1A1A1A"};
  color: ${props => props.color || "#FFFFFF"};
  opacity: 1;
  font-weight: ${props => (props.lang === "en" ? 500 : "Regular")};
  font: ${props =>
    props.lang === "en"
      ? "16px/12px TT Commons"
      : "22px/40px Noto Sans JP Regular"};
  text-align: center;
`

const ButtonLabel = styled.span`
  text-align: center;
  top: 17px;
  bottom: 20px;
  left: 0px;
  right: 22px;
  position: absolute;
  letter-spacing: 0px;
  opacity: 1;
`
