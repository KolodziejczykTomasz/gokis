import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`  
 
`


export const MainTemplate = ({ children }) => {
 
  return (
    <>
      <Wrapper >
        {children}
      </Wrapper>
    </>
  )
}