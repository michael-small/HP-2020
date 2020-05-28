import React from "react"
import { withTheme, useMediaQuery, useTheme } from "@material-ui/core"
import _Image from "../image"
import _Container from "../container"
import localTheme from "./theme"
import styled from "styled-components"

export default ({ ...props }) => {
  const theme = useTheme()
  const downXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Bg {...props}>
      <Container>
        <h1>Vision</h1>
        <h2>Web3.0を実現する</h2>
        <p>
          インターネットが普及して30年、今のインターネットは極度に中央集権的に管理されています。
          我々がインターネットを経由してサービスを使うたびに我々のデータはコピーされサービスプロバイダーによって管理されています。
          人々に力を与えるテクノロジーが人々から自由とプライバシーを奪っています。
          <br />
          <br />
          我々はエッジが力を持つ分散型のWeb、つまりWeb3.0を実現しもう一度システムを再構築することを目指します。
          技術は本当に世の中に浸透すると、誰も技術の存在を意識しなくなるものです。
          技術そのものを知らなくてもブロックチェーンとWeb3.0が世の中に浸透すればそれが「当たり前のもの」になります。
          誰もが「当たり前に」テクノロジーの恩恵を正しく得られるようになります。我々は不可逆な変化を起こし、そんな変化を最前線で作っていきたいと考えています。
        </p>
        <Image
          filename="company/vision.png"
          style={{ position: downXs ? "relative" : "absolute" }}
        />
      </Container>
    </Bg>
  )
}

const Bg = styled.div`
  background-color: #f5f5f5;
`

const Container = withTheme(styled(_Container)`
  ${localTheme}
  width: 100%;
  position: relative;
  padding-bottom: 129px;
  // overflow: hidden;
  * {
    z-index: 2;
  }
  & p {
    max-width: 630px;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    padding-bottom: 0px;
  }
`)

const Image = withTheme(styled(_Image)`
  width: 700px;
  bottom: 0px;
  right: 0px;
  opacity: 0.4;
  z-index: 1;
  ${props => props.theme.breakpoints.down("sm")} {
    opacity: 0.2;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    width: 100vw;
    height: 100vw;
    opacity: 0.4;
  }
`)
