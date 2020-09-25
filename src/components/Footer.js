import React from 'react';
import './styles/Home.css';
import styled from "styled-components";


const Footer = () =>{

    const StyledCounter  = styled.div`    
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
    `;

    const Footer = styled.p`
    font-size: 15px;
    text-align: top;
    margin-bottom: 4%;
    color: grey;
    letter-spacing: 2px;
    font-size: min(max(8px, 4vw), 18px);

    `;

    return(
        <StyledCounter >
            <Footer>@MeFaltaUnVerano 2020</Footer>
        </StyledCounter >
    );
}



export default Footer;