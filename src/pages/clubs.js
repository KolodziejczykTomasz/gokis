import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"
import Footer from "../components/footer"
import ClubList from "../sections/clubslist"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`

const ClubPage = () => (
  <StyledWrapper>
    <SEO title="GOKIS" name="Świetlice wiejskie" />
    <Layout />
    <ClubList />
    <Footer />
  </StyledWrapper>
)

export default ClubPage
