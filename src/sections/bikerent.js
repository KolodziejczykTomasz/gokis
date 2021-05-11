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
  grid-template-columns: 0.33fr 0.33fr 0.33fr;
  grid-auto-flow: column;
  column-gap: 5px;
  @media (max-width: 766px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    row-gap: 5px;
    column-gap: 5px;
    width: 400px;
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
  }
`
const PhotoItem = styled.div`
  width: 100%;
  -moz-box-shadow: 2px 2px 6px 0px #444;
  -webkit-box-shadow: 2px 2px 6px 0px #444;
  box-shadow: 2px 2px 6px 0px #444;
  @media (max-width: 766px) {
    display: grid;
    justify-items: center;
    align-items: center;
    width: 80%;
    max-width: 500px;
  }
`
const Photo = styled(GatsbyImage)`
  :hover {
    transform: scale(1.1);
    z-index: 999;
    border-radius: 15px;
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
              <Photo image={data.imageOne.childImageSharp.gatsbyImageData} />
            </PhotoItem>
            <PhotoItem>
              <Photo image={data.imageTwo.childImageSharp.gatsbyImageData} />
            </PhotoItem>
            <PhotoItem>
              <Photo image={data.imageThree.childImageSharp.gatsbyImageData} />
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
