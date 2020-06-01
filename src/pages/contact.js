import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import localTheme from "../components/contact/theme"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import _Container from "../components/container"
import ArrowButton from "../components/arrowButton"

const ContactPage = () => {
  const formRef = React.useRef(null)

  return (
    <Layout>
      <SEO title="Contact" />
      <NavBar />
      <Container>
        <h1>Contact</h1>
        <form
          name="contact"
          method="POST"
          ref={formRef}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <p>お名前:</p>
            <input type="text" name="name" required />
          </label>
          <label>
            <p>会社名:</p>
            <input type="text" name="company" required />
          </label>
          <label>
            <p>部署名:</p>
            <input type="text" name="department" />
          </label>
          <label>
            <p>役職:</p>
            <input type="text" name="position" />
          </label>
          <label>
            <p>Eメール:</p>
            <input type="email" name="email" required />
          </label>
          <label>
            <p>お問い合わせ内容</p>
            <textarea type="email" name="content" required />
          </label>
          <ArrowButton
            label="送信する"
            style={{ margin: "40px auto 0px" }}
            onClick={() => {
              if (formRef.current.reportValidity()) {
                formRef.current.submit()
              } else {
                return
              }
            }}
          />
        </form>
      </Container>
    </Layout>
  )
}

const Container = withTheme(styled(_Container)`
  ${localTheme}
  max-width: 600px;
  & input,
  textarea {
    font: 16px/30px Noto Sans JP;
    padding-left: 1em;
    width: 100%;
    height: 50px;
    border: 1px solid #cccccc;
  }
  & textarea {
    height: 170px;
  }
`)

export default ContactPage
