import React from 'react'
import Main from "./main"
import Footer from "./footer"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;  
  height: auto;
`;

const Layout =()=> (
<StyledWrapper> 
    <Main/>
    <Footer />
</StyledWrapper>
);

export default Layout;