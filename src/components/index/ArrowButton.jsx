import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const ArrowButton = ({lang, label, color, ...props}) => (
  <ButtonRect lang={lang} color={color} style={{...props.style}}>
    <ButtonLabel>
      {label}
    </ButtonLabel>
    <FontAwesomeIcon style={{position:"absolute", top:"14px", right:"17px"}} icon={faArrowRight}/>

  </ButtonRect>
)

const ButtonRect = styled.div`
  width: 140px;
  height: 46px;
  position: relative;
  border: 1px solid ${props=>props.color || "#1A1A1A"};
  color: ${props=>props.color || "#1A1A1A"};
  opacity: 0.7;
  font: ${props=>((props.lang==="en") ? "16px/12px TT Commons" : "15px/12px Noto Sans JP Regular") };
  font-weight:  ${props=>((props.lang==="en") ? 500  : "Regular" )};
  text-align: center;
`

const ButtonLabel = styled.div`
  text-align: center;
  top: 17px;
  bottom: 13px;
  left: 0px;
  right: 7px;
  position: absolute;
  letter-spacing: 0px;
  opacity: 1.0;
`