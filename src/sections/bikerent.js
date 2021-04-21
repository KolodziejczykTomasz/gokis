import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaFileDownload } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"
import BreakeSection from "../components/breakeSection"

import styled from "styled-components"

const Section = styled.div`
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const Wrapper = styled.div`
  padding-bottom: 75px;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-auto-flow: column;
  column-gap: 5px;
`
const PhotoItem = styled.div`
  width: 100%;
  -moz-box-shadow: 2px 2px 6px 0px #444;
  -webkit-box-shadow: 2px 2px 6px 0px #444;
  box-shadow: 2px 2px 6px 0px #444;
`
const Photo = styled.img`
    &:hover  {
    border: 4px solid black;
  }
`

const BikeRent = ({ plussize, minussize, activecolor }) => {
  const data = useStaticQuery(graphql`
    query Images {
      imageOne: file(name: { eq: "bike1" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      imageTwo: file(name: { eq: "bike2" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      imageThree: file(name: { eq: "bike3" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      imageFour: file(name: { eq: "bike2" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  if (!data?.imageOne?.childImageSharp?.gatsbyImageData) {
    return <div>Picture 1 not found</div>
  }
  if (!data?.imageTwo?.childImageSharp?.gatsbyImageData) {
    return <div>Picture 2 not found</div>
  }
  if (!data?.imageThree?.childImageSharp?.gatsbyImageData) {
    return <div>Picture 3 not found</div>
  }
  if (!data?.imageFour?.childImageSharp?.gatsbyImageData) {
    return <div>Picture 4 not found</div>
  }
  return (
    <>
      <Section
        id="bike"
        style={{
          marginTop: "100px",
          fontSize: `${16 + plussize - minussize}px`,
        }}
        plussize={plussize}
        minussize={minussize}
        activecolor={activecolor}
      >
        <BreakeSection>Wypożyczalnia rowerów</BreakeSection>
        <Wrapper
          style={{
            marginTop: "100px",
            fontSize: `${16 + plussize - minussize}px`,
          }}
          plussize={plussize}
          minussize={minussize}
          activecolor={activecolor}
        >
          <PhotoGallery>
            <PhotoItem>
              <GatsbyImage
                image={data.imageOne.childImageSharp.gatsbyImageData}
              />
            </PhotoItem>
            <PhotoItem>
              <GatsbyImage
                image={data.imageTwo.childImageSharp.gatsbyImageData}
              />
            </PhotoItem>
            <PhotoItem>              
              <GatsbyImage
                image={data.imageThree.childImageSharp.gatsbyImageData}
              />
            </PhotoItem>
            <PhotoItem>              
              <GatsbyImage
                image={data.imageFour.childImageSharp.gatsbyImageData}
              />
            </PhotoItem>
          </PhotoGallery>
        </Wrapper>
        <div className="mainSection" style={{ padding: "150px 0 100px 0" }}>
          <table
            className="table"
            style={{
              width: "100%",
              margin: "0 auto",
              backgroundColor: activecolor ? "yellow" : "white",
            }}
          >
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <th>Regulanim wypożyczania rowerów</th>
                <td align="center">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginleft: "15",
                    }}
                  >
                    <FaFileDownload style={{ fontSize: 30 }} />
                  </a>
                </td>
              </tr>
              <tr>
                <th>Wniosek o wypożyczenie roweru</th>
                <td align="center">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginleft: "15" }}
                  >
                    <FaFileDownload style={{ fontSize: 30 }} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </>
  )
}

export default BikeRent
