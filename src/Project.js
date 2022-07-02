import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import './App.css';
import fiver_logo from './images/fiver_logo.png'
import upwork_logo from './images/Upwork-Logo.png'
import { Typography } from '@mui/material';
import Fade from '@mui/material/Fade';

export default function Project(props){
    const [animate, setAnimate] = useState(false)
    useEffect(() => {
       
        if (props.page === 3){
            setAnimate(true)
            console.log(animate)}
        else{
            setAnimate(false)
        }


      }, [props.page, animate, props.image]);
    
    return(
        <div style={props.isMobile ? {height: "auto", maxWidth: "100%"} : {height: "400px", maxWidth: "100%"}}>
            <Fade style={{width: "100%"}} orientation='vertical' in={animate}>
                <Paper sx={{backgroundColor: "rgba(66, 65, 65, 0)", borderRadius: "10px",flexDirection: "column",  display: "flex", width: "90%", height: "100%", justifyContent: "center", alignItems: "center"}} elevation={0}>
                    <img style={{marginTop: 0, height: "100%", width: "100%", borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px"}}   src={props.image}/>
                </Paper>
            </Fade>
        </div>
    )

}