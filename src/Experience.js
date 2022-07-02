import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import './App.css';
import fiver_logo from './images/fiver_logo.png'
import upwork_logo from './images/Upwork-Logo.png'

export default function Experience(props){
    const [animate, setAnimate] = useState(false)
    useEffect(() => {
       
        if (props.page === 2){
            setAnimate(true)
            }
        else{
            setAnimate(false)
        }


      }, [props.page, animate, props.image]);
    
    if (props.image === fiver_logo){
        return(
            <div className="accelerated box">
            <Grow in={animate}>
                <Paper sx={{backgroundColor: "rgba(66, 65, 65, 0)", color: "white", gap: 0, boxShadow: "rgba(0, 0, 0, 0) 0px 4px 12px", padding:0, margin: 0 ,flexDirection: "column", height: "200px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center"}} elevation={0}>
                <img style={{ width: "150px"}}  className="image" src={props.image}/>
                </Paper>
            </Grow>
            </div>

        )
    }
    else if (props.image === upwork_logo){
        return(
            <div className="accelerated box">
            <Grow in={animate}>
                <Paper sx={{backgroundColor: "rgba(66, 65, 65, 0)", color: "white", gap: 0, boxShadow: "rgba(0, 0, 0, 0) 0px 4px 12px", padding:0, margin: 0 ,flexDirection: "column", height: "200px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center"}} elevation={0}>
                <img style={{ width: "170px"}}  className="image" src={props.image}/>
                </Paper>
            </Grow>
            </div>
        )}
    else{
        return(
            <div className="accelerated box">
            <Grow in={animate}>
                <Paper sx={{backgroundColor: "rgba(66, 65, 65, 0)", color: "white", gap: 0, boxShadow: "rgba(0, 0, 0, 0) 0px 4px 12px", padding:0, margin: 0 ,flexDirection: "column", height: "200px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center"}} elevation={0}>
                <img style={{ width: "300px"}}  className="image" src={props.image}/>
                </Paper>
            </Grow>
            </div>
        )}
}