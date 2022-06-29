import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import './App.css';
import fiver_logo from './images/fiver_logo.png'
import upwork_logo from './images/Upwork-Logo.png'
import { Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';

export default function Project(props){
    const [animate, setAnimate] = useState(false)
    useEffect(() => {
       
        if (props.page === 3){
            setAnimate(true)
            console.log(animate)}


      }, [props.page, animate, props.image]);
    
    console.log('testestest')
    
    return(
        <div style={{height: "400px"}}>
            <Collapse style={{width: "100%"}} orientation='vertical' in={animate}>
                <Paper sx={{backgroundColor: "rgba(66, 65, 65, 0)", borderRadius: "10px",flexDirection: "column",  display: "flex", width: "90%", height: "400px", justifyContent: "center", alignItems: "center"}} elevation={0}>
                    <img style={{height: "95%", width: "95%", borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px"}}   src={props.image}/>
                </Paper>
            </Collapse>
        </div>
    )

}