import React from "react"
import styled from "styled-components"

const CardContainer=styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export { CardContainer };