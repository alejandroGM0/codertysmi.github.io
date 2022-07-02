import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Profile from '../src/8bitpix.png'

export default function About(props){

    const [animate, setAnimate] = useState(false)
    const clsName = `devicon-${props.iconName}-plain`
    useEffect(() => {
        if (props.page === 1){
            setAnimate(true)
    
        }
        else{
            if(!props.isMobile){
            setAnimate(false)
          }
        }      }, [props.page, animate]);

    return(
      <>
        <Grid item xs={12} md={12} lg={4}>
        <Fade in={animate}>
          <Paper sx={{backgroundColor: "rgba(0, 0, 0, 0)", p: 2, gap: 2, color: "white",  height: "50%", display: "flex", justifyContent: "center"}} elevation={0}>
            <img className="profile" src={Profile}/>
          </Paper>
        </Fade>
      </Grid>
      <Grid item xs={12} md={12} lg={8}>
        <Collapse orientation="vertical" in={animate}>
          <Paper sx={{backgroundColor: "#193838", borderRadius: "25px", p: 2, gap: 2, color: "white", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",  height: "auto"}} elevation={0}>
            <p style={{fontSize: "18px", marginLeft: "5px"}}>Hello, my name is Alex. I have been performing as a back-end and front-end web developer for 04 years and am still in the process of gaining more experiences through more years. I'm studying a bachelor’s degree in Software engineering. Some effective on-job training make me more skilled in this field to work in any circumstances. I am passionate of websites and back-end coding and machine learning algorithms. I like to play with codes and results the best output from my work. I have mastered in web languages like the Python, JavaScript, HTML, CSS and my websites are SEO friendly as well.</p>
          </Paper>
        </Collapse >
      </Grid>
      </>
    )
}