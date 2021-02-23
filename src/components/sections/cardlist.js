import React, { useState, useEffect } from "react"
import CardItem from "./carditem"
import { news as newsData } from "../../data/news"

import styled from "styled-components"

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newsData) {
        resolve([ ...newsData ])
      } else {
        reject({ message: "Error" })
      }
    }, 2000)
  })
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`

const CardList = () => {
  const [news, setNews] = useState([])
  const [isLoading, setLoadingState] = useState([])

  useEffect(() => {
    setLoadingState(true)
    mockAPI()
      .then(data => {
        setLoadingState(false)
        setNews(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Wrapper>
      {<h1>{isLoading ? "Loading" : null}</h1>}
      {news.map(newsItem => (
        <CardItem key={newsItem.id} newsItem={newsItem} />
      ))}
    </Wrapper>
  )
}

export default CardList
