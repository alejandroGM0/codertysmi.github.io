import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import './App.css';


export default function Tech(props){
    const [animate, setAnimate] = useState(false)
    const clsName = `devicon-${props.iconName}-plain`
    useEffect(() => {
        if (props.page === 1){
            setAnimate(true)
    
        }
        else{
            setAnimate(false)
        }      }, [props.page, animate]);

    return(
        <div className="accelerated box">
        <Grow in={animate}>
        <Paper sx={{backgroundColor: "#193838", color: "white", gap: 0, boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", padding:0, margin: 0 ,flexDirection: "column", height: "125px", width: "125px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "25px"}} elevation={0}>
        <i style={{fontSize: "35px"}} class={clsName}></i>
        <p style={{margin:  0, padding: 8}}>{props.title}</p>
        </Paper>
        </Grow>
        </div>
    )
}