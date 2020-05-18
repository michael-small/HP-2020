import React from "react"
import styled from "styled-components"

const Company = ({ ...props }) => {
  return (
    <Container {...props}>
      <h1>Company</h1>
      <Table>
        <tr>
          <Attr>
          会社名
          </Attr>
          <Val>
          Stake Technologies株式会社
          </Val>
        </tr>
        <tr>
          <Attr>
          設立
          </Attr>
          <Val>
          2019年1月
          </Val>
        </tr>
        <tr>
          <Attr>
          住所
          </Attr>
          <Val>
           {"東京都港区南⻘山3-1-30 エイベックスビル コワーキングスペース「avex EYE」内"}
          </Val>
        </tr>
        <tr>
          <Attr>
          代表取締役
          </Attr>
          <Val>
          渡辺創太
          </Val>
        </tr>
        <tr>
          <Attr>
          Eメール
          </Attr>
          <Val>
          info@stake.co.jp
          </Val>
        </tr>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  padding: 90px 80px 149px;
  letter-spacing: 0px;
  color: #1A1A1A;
  width: 100%;
  h1 {
    text-align: center;
    margin: 0px auto 0px;
    font: 60px/81px TT Commons;
    font-weight: Bold;
  }
`

const Table= styled.table`
  margin: 26px auto 0;
  width: 100%;
  max-width: 700px;
  td {
    vertical-align: middle;
    margin: auto 0 auto;
    padding-top: 26px;
    padding-bottom: 25px;
  }
  tr {
    height: 80px;
  }
  tr+tr{
    border-top: 1px solid #DEDEDE;
    border-collapse: collapse;
  }
`

const Attr = styled.td`
  text-align: left;
  padding-left: 30px;
  font: 16px/30px Noto Sans JP Regular;
  letter-spacing: 0px;
  color: #1A1A1A;
  width: 172px;
`

const Val = styled.td`
  text-align: left;
  padding-right: 30px;
  font: 16px/30px Noto Sans JP Regular;
  letter-spacing: 0px;
  color: #7B7B7B;
`

export default Company;