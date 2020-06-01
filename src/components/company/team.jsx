import React from "react"
import Image from "../image"
import styled from "styled-components"
import {
  withTheme,
  Dialog as MuiDialog,
  DialogContent as MuiDialogContent,
  withStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import localTheme from "./theme"
import _Container from "../container"

const Introductions = [
  {
    filename: "1_-Sota-Watanabe_CEO.jpg",
    name: "Sota Watanabe",
    job: "CEO",
    description: `慶應義塾大学経済学部卒。インド、ロシア、中国、アメリカでインターンシップ活動を経験後、2018年シリコンバレーのブロックチェーンスタートアップChronicledに就職。帰国後、東京大学大学院ブロックチェーンイノベーション寄付講座共同研究員を経てStake Technologiesを山下と創業。`,
  },
  {
    filename: "2_Takumi-Yamashita_CTO.jpg",
    name: "Takumi Yamashita",
    job: "CTO",
    description: ``,
  },
  {
    filename: "3_Masaharu-Uno_COO.jpg",
    name: "Masaharu Uno",
    job: "COO",
    description: `神戸大学発達科学部卒。広告業界経験後、Omise JapanのCountry Managerとして日本市場の立ち上げと事業展開を実施。その後、ブロックチェーン開発/コンサルティングのBUIDLでVice Presidentとして会社の設立と事業立ち上げ、統括に従事。
    Mastering Ethereum 監訳/翻訳者`,
  },
  {
    filename: "4_Task-Ohmori_Core-Developer.jpg",
    name: "Task Ohmori",
    job: "Core Developer",
    description: `東京大学工学部計数工学科卒。スマートコントラクト用のブラウザIDEの開発に携わる。2012,2013年国際物理オリンピック銀メダル受賞。`,
  },
  {
    filename: "5_-Alexandr-Krupenkin.png",
    name: "Alexandr Krupenkin",
    job: "Software Engineer",
    description: `2009年にビットコインと出会う。ロシアのITMO大学を修士として卒業。2015年からEthereumの仕事をする。Robonomicsプロジェクの一環として、IoT platform を作ることをサポートする。Plasm Networkにおいては2019年からStake Technologiesとして働いている。`,
  },
  {
    filename: "6_-Yoshinobu-Shijo.png",
    name: "Yoshinobu Shijo",
    job: "Product Manager",
    description: `LastRoots社の創業メンバーCTOとしてサービスの企画から開発まで担当。その後フリーランスを経て、自己主権型情報銀行を目指すIFA株式会社のCTOとして事業を牽引。 現在、大阪大学大学院情報科学研究科博士後期課程に在学。大阪大学基礎工学部首席卒業。`,
  },
  {
    filename: "7_Hoon-Kim_Software-Engineer.jpg",
    name: "Hoon Kim",
    job: "Software Engineer",
    description: `2014年国際プログラミングコンテスト韓国全国大会金賞。Substrate Frameworkを活かして株の取り引きを行うプラットフォームの開発とそれに関する論文で大学で優秀論文賞を受賞。立命館アジア太平洋大学国際経営学部卒業。2019年からPlasm Networkの開発に努める。`,
  },
  {
    filename: "8_-Tomomasa-Matsunaga.png",
    name: "Tomomoasa Matsunaga",
    job: "Software Engineer",
    description: `東京大学大学院情報理工学系研究科修士課程を卒業。現在、同研究科博士後期課程に在学中。プログラミング言語基盤、機械学習等を用いたプログラミング支援ツールに関する研究などを行っている。StakeではSubstrateを用いたプロダクト開発・コンサルティング、 Plasm Networkの開発に関わっている。`,
  },
]

export default ({ ...props }) => {
  const [refs, setRefs] = React.useState([])

  React.useEffect(() => {
    setRefs(elRefs => Introductions.map((_, i) => React.createRef()))
  }, [])

  return (
    <Bg>
      <Container {...props}>
        <h1>Teams</h1>
        <FlexConteiner>
          {Introductions.map((item, index) => {
            return (
              <FlexItem key={index}>
                <div
                  onClick={() => {
                    refs[index].current.handleClickOpen()
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    filename={item.filename}
                    style={{ width: 204, height: 204 }}
                  />
                  <Name>{item.name}</Name>
                  <Job>{item.job}</Job>
                </div>
                <IntroductionDialog ref={refs[index]} item={item} />
              </FlexItem>
            )
          })}
        </FlexConteiner>
      </Container>
    </Bg>
  )
}

const IntroductionDialog = React.forwardRef(({ item, ...props }, ref) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  React.useImperativeHandle(ref, () => {
    return {
      handleClickOpen: () => handleClickOpen(),
      handleClose: () => handleClose(),
    }
  })

  return (
    <Dialog onClose={handleClose} open={open} fullScreen={fullScreen}>
      <IconButton style={{ margin: "0px 0px 0px auto" }} onClick={handleClose}>
        <CloseIcon style={{ color: "white" }} />
      </IconButton>
      <DialogContent dividers>
        <Image
          filename={item.filename}
          style={{ width: 204, height: 204, margin: "0px auto 30px" }}
        />
        <h1>{item.name}</h1>
        <h2>{item.job}</h2>
        <p>{item.description}</p>
      </DialogContent>
    </Dialog>
  )
})

const Bg = styled.div`
  background-color: #1a1a1a;
`

const Container = withTheme(styled(_Container)`
  ${localTheme}
  paddint-bottom: 116px;
  letter-spacing: 0px;
  color: #ffffff;
  width: 100%;
`)

const FlexConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  margin: 49px auto 0px;
  font: 20px/27px TT Commons;
  font-weight: 500;
`

const FlexItem = styled.div`
  margin 0px 27px 49px;
  text-align: left;
`

const Name = styled.span`
  display: block;
  margin: 5px auto 0px;
  font: inherit;
  color: #ffffff;
`

const Job = styled.span`
  display: block;
  font: inherit;
  color: #9b9b9b;
`

const Dialog = withStyles(theme => ({
  paper: {
    backgroundColor: "#1A1A1A",
  },
}))(MuiDialog)

const DialogContent = withStyles(theme => ({
  root: {
    textAlign: "center",
    "& h1": {
      color: "#ffffff",
      font: "500 26px/35px TT Commons",
    },
    "& h2": {
      font: "400 18px/25px TT Commons",
      color: "#9B9B9B",
    },
    "& p": {
      whiteSpace: "pre-line",
      marginTop: "30px",
      textAlign: "left",
      font: "400 15px/25px Noto Sans JP",
      color: "#CCCCCC",
    },
  },
}))(MuiDialogContent)
