import React from 'react';
import './styles/Home.css'
import styled from "styled-components";
import { MarkGithub } from "@styled-icons/octicons/MarkGithub";
import { Twitter } from "@styled-icons/entypo-social/Twitter";
import { Discord } from "@styled-icons/remix-fill/Discord";
import { Email } from "@styled-icons/entypo/Email";
//import {StyledIconBase} from '@styled-icons/styled-icon'



const Links = () =>{

    const Link = styled.a`
    padding: 5px 10px;
    color: white;
  `;


  const Github = styled(MarkGithub)`

  margin-top: 9%;
  flex: none;
  transition: fill 0.25s;
  width: 27%;
  height: auto;
  max-width: 500px;
  min-width: 50px;
  max-width: 150px;

  ${Link}:hover & {
    fill: orangered;
  }`;


  const Dscrd = styled(Discord)`

  margin-top: 9%;
  flex: none;
  transition: fill 0.25s;
  width: 34%;
  height: auto;
  max-width: 500px;
  min-width: 50px;
  max-width: 150px;

  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  ${Link}:hover & {
    fill: orangered;
  }`;

  const Twttr = styled(Twitter)`

  margin-top: 9%;
  flex: none;
  transition: fill 0.25s;
  width: 30%;
  height: auto;
  max-width: 500px;
  min-width: 50px;
  max-width: 150px;

  ${Link}:hover & {
    fill: orangered;
  }`;

  const Eml = styled(Email)`
  
  margin-top: 9%;
  flex: none;
  transition: fill 0.25s;
  width: 30%;
  height: auto;
  max-width: 500px;
  min-width: 50px;;
  max-width: 150px;

  ${Link}:hover & {
    fill: orangered;
  }`;

  //Test Base Icon Styles
  /*const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
  margin-top: 9%;
  flex: none;
  transition: fill 0.25s;
  max-width: 30%;
  width: 30%;
  height: auto;
  ${Link}:hover & {
    fill: orangered;
  }}`;
  */


    return(


        <div className='links'>
          <Link href="https://github.com/MeFaltaUnVerano21" target="_blank">
            <Github/>
          </Link>
          <Link href="https://discordhub.com/profile/318339617109835788" target="_blank">
            <Dscrd/>
          </Link>      
          <Link href="https://twitter.com/MeFaltaUnVeran" target="_blank">
            <Twttr/>
          </Link>     
          <Link href="mailto:trolleros300@gmail.com" target="_blank">
            <Eml/>
          </Link>
        </div>
    );
}



export default Links;
