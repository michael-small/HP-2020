import React from "react"
import { useMediaQuery, useTheme } from "@material-ui/core"
import { ButtonRect, ButtonLabel, ArrowRightIcon } from "../arrowButton"
import { navigate } from "gatsby"

export default ({ style, to, ...props }) => {
  const theme = useTheme()
  const downXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <ButtonRect
      lang={downXs ? "en" : "ja"}
      width={downXs ? "140px" : "150px"}
      height="46px"
      color="#FFFFFF"
      backgroundColor="rbga(0,0,0,0)"
      style={{
        fontSize: downXs ? "16px" : "15px",
        opacity: 0.7,
        border: "1px solid",
        margin: downXs ? "20px auto 0px" : "30px 0px 0px",
        ...style,
      }}
      onClick={() => {
        navigate(to)
      }}
      {...props}
    >
      <ButtonLabel style={{ opacity: 1 }}>
        {downXs ? "More Detail" : "詳しく見る"}
        <ArrowRightIcon />
      </ButtonLabel>
    </ButtonRect>
  )
}