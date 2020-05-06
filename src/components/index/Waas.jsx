import React from "react"
import Background from "../background"
import styled from "styled-components"

export default () => (
  <>
    <WaasBg filename="service-bg.png">
      <WaasContainer></WaasContainer>
    </WaasBg>
  </>
)

const WaasBg = styled(Background)`
  && {
    padding-top: 0px;
    width: 100%;
    height: 959px;
    background-color: #000000;
  }
`

const WaasContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding-top: 120px;
`
