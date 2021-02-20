import React from "react"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import GlobalStyle from "../assets/styles/globalStyle"


const Wrapper = styled.div`
  display: grid;
  height: 50vh;
  place-items: center;
`

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title="404: Not found" />
      <Wrapper>
        <div>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Wrapper>
    </Layout>
    <Footer />
  </>
)

export default NotFoundPage
