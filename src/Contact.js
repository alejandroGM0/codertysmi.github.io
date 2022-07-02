import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';


const ContactButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#eca343"),
    backgroundColor: "#cf7a09",
    '&:hover': {
      backgroundColor: "#ab6407",
    },
    borderRadius: 9,
  }));  

const FORM_ENDPOINT = "https://public.herotofu.com/v1/69878080-f566-11ec-95d6-ef970076a4ff"; // TODO - fill on the later step

export default function Contact (props){
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  const [animate, setAnimate] = useState(false)
  useEffect(() => {
      if (props.page === 4){
          setAnimate(true)
          console.log(animate)
  
      }
      else{
        setAnimate(false)
      }      }, [props.page, animate]);

  if (status) {
    return (
      <>
      <Typography variant="h4" style={{width: "100%", borderRadius: "20px", height: "50px", display: "flex",  justifyContent: "center"}}>
        📩
      </Typography>
      <div style={{width: "100%", borderRadius: "20px", height: "50px", display: "flex",  justifyContent: "center"}}>
        <div className="text-2xl">
          <Typography variant="h6">
          Thank you! ‎ 
          </Typography>
        </div>
        <div className="text-md">
          <Typography variant="h6">{status}</Typography>
          </div>
      </div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit}  style={{display: "flex", width: "100%", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "50px"}} method="post">
    <Collapse style={{width:"100%", height: "100%"}} orientation="vertical" in={animate} >
    <div style={{ display: "flex",  justifyContent: "center", alignItems: "center", height: "100%"}}>

      <div style={{ backgroundColor: "#142c2c", width: "50%", borderRadius: "20px", height: "55px", display: "flex",  justifyContent: "center", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
          <Input color="warning" sx={{
              width: "98%",
              height: "100%",
              background: "#142c2c",
              borderRadius: "20px",
              input: {
              color: "white",
              marginTop: "2px",
              marginLeft: "15px",

              },

          }}  name="Email" id="email" placeholder="Email" required variant="filled" />
      </div>
    </div>
    </Collapse>
    <Collapse style={{width:"100%", height: "100%"}} orientation="vertical" in={animate} >
    <div style={{ display: "flex",  justifyContent: "center", alignItems: "center", height: "100%"}}>
        <div  style={{ backgroundColor: "#142c2c", width: "50%", borderRadius: "20px", display: "flex",  justifyContent: "center", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <Input  color="warning" sx={{
                    background: "#142c2c",
                    width: "97.8%",
                    height: "100%",
                    background: "#142c2c",
                    borderRadius: "25px",
                    color: "white",
                    marginTop: "15px",
                    marginLeft: "15px",

              input: {
                color: "white",
              }
            }} name="text" id="text" label="Multiline Placeholder" placeholder="Message" multiline required variant="filled" rows={5}/>
        </div>
      </div>
    </Collapse>
    <Fade style={{width:"100%"}} orientation="vertical" in={animate} >
    <div style={{ display: "flex",  justifyContent: "center", alignItems: "center"}}>
        <ContactButton size="large" style={{color: "white"}} type="submit">submit</ContactButton>
    </div>
    </Fade>

    </form>
  )
}

