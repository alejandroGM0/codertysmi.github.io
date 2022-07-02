import logo from './logo.svg';
import gtLogo from './images/gt_logo2.png';
import nHLogo from './images/logo.png';
import logo_cpepa from './images/logo_cpepa.png'
import logo_fd from './images/logo-futuro-digital.png'
import fiver_logo from './images/fiver_logo.png'
import upwork_logo from './images/Upwork-Logo.png'
import groomusic from './images/groomusic.png'
import spartbot from './images/spartbot.png'
import pc_tracker from './images/pc_tracker.png'
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Profile from '../src/8bitpix.png'
import Tech from "./Tech.js"
import Experience from "./Experience.js"
import Contact from "./Contact.js"
import Project from "./Project.js"
import About from "./About.js"
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';
import GLOBE from "vanta/dist/vanta.net.min";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as THREE from "three";
import * as p5 from "p5";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import { Circle, Heart } from 'react-spinners-css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const ContactButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#eca343"),
  backgroundColor: "#cf7a09",
  '&:hover': {
    backgroundColor: "#ab6407",
  },
  borderRadius: 9,
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#eca343"),
  backgroundColor: "white",
  '&:hover': {
    backgroundColor: "#d9d9d9",
  },
  borderRadius: 9,
}));


const Credits = {enabled: false, label: 'Made with fullPage.js', position: 'right'}




function App(fullpageProps) {



  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState(false)
  const [animateProject, setAnimateProject] = useState(false)
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const [display, setDisplay] = useState("none");
  const [slide, setSlide] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
        GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: "#cf7a09",
            points: 10.00,
            maxDistance: 20.00,
            backgroundColor: "#102424",
            spacing: 20.00,
            THREE: THREE,
            p5: p5
          })
        );
        setDisplay("block")
      }
      return () => {

      };
    }, [vantaEffect, page, animate, slide]);


  function afterLoad(origin, destination, direction){
    if (destination != null){
    setPage(destination.index)
    if (destination.index === 1){
      setAnimate(true)

  }
  else if (destination.index=== 3){
    setSlide(true)

  }
  else{
  }}
  }

  function loading(){
    if (display === "none"){
    return ( <h1 style={{color: "black",   zIndex: 5, height: "100%", width: "100%"}}>Loading</h1>)}
    else{
      return(
        null
      )
    }
  }

  if(page===2){}

  return (
    <div ref={vantaRef} style={{backgroundColor: "#102424"}}>    
    {loading}

    <div style={{display: ""}}>
    
    <AppBar elevation={0} color="transparent" sx={isMobile ? {backdropFilter:"blur(20px)"}: {}}  position="fixed">
    <Toolbar color="transparent">
      <Typography  color="white" noWrap variant="h5" sx={{flexGrow: 1, mr: 2,
              display: { xs: 'flex'},
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              color: "white"}}>
          <Link href="#Home" style={{textDecoration: "none", boxShadow: "none", background: "none", color: "white"}} underline="none">
          ALEX PORTFOLIO
        </Link>
      </Typography>
      {!isMobile ? 
      <div style={{display: "flex", gap: "70px", marginRight: "50px"}}>
      <Button href='#Home' variant="text" sx={{color: "white", borderRadius: 3,}}>Home</Button>
      <Button href='#About' variant="text" sx={{color: "white", borderRadius: 3}}>About</Button>
      <Button href='#Experience' variant="text" sx={{color: "white", borderRadius: 3}}>Experience</Button>
      <Button href='#Projects' variant="text" sx={{color: "white", borderRadius: 3}}>Projects</Button>
      <ContactButton href='#Contact' disableElevation variant="contained" sx={{color: "white"}}>Contact</ContactButton>

      </div>
    :
      <>
        <IconButton onClick={()=>setMobileMenu(!mobileMenu)} style={{color: "white"}}>
          <MenuIcon/>
        </IconButton>
        <Menu sx={{ mt: '45px'}} elevation={0} open={mobileMenu} onClose={()=>setMobileMenu(!mobileMenu)} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
          <MenuItem component='a' href="#Home">
            <Typography>
              Home
            </Typography>
          </MenuItem>
          <MenuItem component='a' href="#About">
            <Typography>
              About
            </Typography>
          </MenuItem>
          <MenuItem component='a' href="#Experience">
            <Typography>
              Experience
            </Typography>
          </MenuItem>
          <MenuItem component='a' href="#Projects">
            <Typography>
              Projects
            </Typography>
          </MenuItem>
          <MenuItem component='a' href="#Contact">
            <Typography>
              Contact
            </Typography>
          </MenuItem>

        </Menu>
      </>
    }
    </Toolbar>
    </AppBar>
    <div style={{position : "absolute", marginTop: "46%", marginLeft: "3%", zIndex: 99}}>

    </div>
    <ReactFullpage
      afterLoad={afterLoad}
      navigation
      licenseKey={"YOUR_LICENSE_KEY"}
      credits =  {Credits}
      slidesNavigation = {false}
      css3
      verticalCentered
      controlArrows
      fitToSection
      responsiveHeight = {0}
      slidesNavPosition='bottom'
      anchors={["Home", "About", "Experience", "Projects", "Contact"]}
    render={({ state, fullpageApi }) => {
      console.log(page)
      return (
        
        <ReactFullpage.Wrapper>
          <div  className="section">
            <div className={isMobile ? "section1Mobile" : "section1"}>

                  <div className="text">
                  <h1 style={{letterSpacing: "2px"}}>Software,
                    Front-end and Back-end
                    <br />
                    <a className="animate-charcter">developer</a>
                    
                  </h1>                    




              </div>
              <div className="arrow bounce">
              <IconButton aria-label="Go down" size="large" color="inherit" onClick={()=>fullpageApi.moveSectionDown()}>
                <KeyboardArrowDownIcon fontSize="large"/>
              </IconButton>
              </div>
            </div>
          </div>
          <div style={{backgroundColor: "#102424"}} className="section">
            <div className="section2">
            <Box m={6}>
            <Grid container justifyContent="space-evenly" spacing={3}>
                <Grid item xs={12}>
                    <div className="text2" style={{  justifyContent: "center", display: "flex"}}>
                    <h1>
                      About Me
                    </h1>
                  </div>
                </Grid>
                <About page={page} isMobile={isMobile}/>
                <Grid item xs={12}>
                    <div style={{  justifyContent: "center", display: "flex"}}>
                    <h2>
                      Technologies I’ve been working with recently
                    </h2>
                  </div>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Python" iconName="python"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="JavaScript" iconName="javascript"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Cplusplus" iconName="cplusplus"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Lua" iconName="lua"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Css" iconName="css3"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Html" iconName="html5"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                <Tech page={page} title="Django" iconName="django"/>

                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Flask" iconName="flask"/>

                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="MongoDB" iconName="mongodb"/>

                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="MySQL" iconName="mysql"/>

                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                  <Tech page={page} title="PostgreSQL" iconName="postgresql"/>

                </Grid>
                
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={6} md={2} lg={2} xl={1}>
                <Tech page={page} title="Amazon" iconName="amazonwebservices"/>

                </Grid>
            </Grid>
            </Box>

            </div>
          </div>
          <div className="section">
            <div className="section3" >
            <Box m={0}>
            <Grid style={{width: "100%", height: "100%"}}  container justifyContent="space-evenly" spacing={0}>
              <Grid item xs={12}>
                    <div className="text2" style={{  justifyContent: "center", display: "flex"}}>
                    <h1>
                      Worked with
                    </h1>
                  </div>
              </Grid>
              <Grid className="test" style={{borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", marginTop: "50px",  marginBottom: "50px"}} item xs={11}>
                <Box m={0}>
                <Grid style={{marginBottom: "20px"}} container spacing={3}>
                  <Grid style={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                    <Experience page={page} image={gtLogo}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                        <Experience page={page} image={nHLogo}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                      <Experience page={page} image={logo_cpepa}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                      <Experience page={page} image={logo_fd}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                      <Experience page={page} image={fiver_logo}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                  <Experience page={page} image={upwork_logo}/>

                  </Grid>
                </Grid>
                </Box>
              </Grid> 
              
              </Grid>
              
            </Box>
          </div>
          </div>
          <div className='section'>          
            <div className="slide" data-anchor="GrooMusic" style={{backgroundColor: "#121215", minHeight: "100%",color: "whitesmoke",display: "flex",justifyContent: "center"}}>
            <Box m={isMobile ? 12 : 20 }>
              <Grid container spacing={5}>
                    <Grid item xs={12} style={{alignText: "center", display: "flex", alignItems: "center", justifyContent: "center",}}>
                      <div className="textProject" style={{  justifyContent: "center", display: "flex"}}>
                        <h1>
                          GrooMusic
                        </h1>
                      </div>
                    </Grid>
                    <Grid style={{}} item xs={12} md={12} lg={6}>
                      <Project isMobile={isMobile} page={page} image={groomusic}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} style={{}}>
                    <Collapse orientation="vertical" style={{}} in={page===3}>
                      <Paper style={!isMobile ? {backgroundColor: "#1E1E23", borderRadius: "25px", color: "white", boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px",  height: "200px", display: "flex", justifyContent: "center"} : {backgroundColor: "#1E1E23", borderRadius: "25px", color: "white", boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px",  height: "100%", display: "flex", justifyContent: "center"}} elevation={0}>
                        <p style={{fontSize: "18px", margin: "20px",}}>This website allows you to create private or public rooms to listen to music synchronously with other people, you can modify the permissions of each member or include your room elsewhere with the API.</p>
                      </Paper>
                    </Collapse>
                    <Fade in={page===3}>
                      <ProjectButton target="_blank" component="a" href="http://groomusic.xyz/" size="large" style={{marginTop: "25px"}}>Go</ProjectButton>
                    </Fade>
                  </Grid>
                    
              </Grid>

            </Box>
            </div>
            <div className="slide" data-anchor="SpartBot" style={{backgroundColor: "#1F1F1F", minHeight: "100%",color: "whitesmoke",display: "flex",justifyContent: "center"}}>
            <Box m={isMobile ? 12 : 20 }>
              <Grid container spacing={5}>
                    <Grid item xs={12} style={{alignText: "center", display: "flex", alignItems: "center", justifyContent: "center",}}>
                      <div className="textProject" style={{  justifyContent: "center", display: "flex"}}>
                        <h1>
                          SpartBot
                        </h1>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                      <Project isMobile={isMobile} page={page} image={spartbot}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} style={{alignText: "center"}}>
                    <Collapse orientation="vertical" style={{}} in={page===3}>
                      <Paper style={{backgroundColor: "#303030", borderRadius: "25px", color: "white", boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px",  height: "200px", display: "flex", justifyContent: "center"}} elevation={0}>
                        <p style={{fontSize: "18px", margin: "20px",}}>A management application for companies and communities, this tool allows moderation, ticket management and customer protection, it also has multiple integrations with Discord, Telegram, Slack and others.</p>
                      </Paper>
                    </Collapse>
                    <Fade in={page===3}>
                    <ProjectButton target="_blank" component="a" href="http://spartbot.xyz/" size="large" style={{marginTop: "25px"}}>Go</ProjectButton>
                    </Fade>
                    </Grid>
                    
              </Grid>

            </Box>
            </div>         
            <div className="slide" data-anchor="pc_tracker" style={{backgroundColor: "#08070A", minHeight: "100%",color: "whitesmoke",display: "flex",justifyContent: "center"}}>
            <Box m={isMobile ? 12 : 20 }>
              <Grid container spacing={5}>
                    <Grid item xs={12} style={{alignText: "center", display: "flex", alignItems: "center", justifyContent: "center",}}>
                      <div className="textProject" style={{  justifyContent: "center", display: "flex"}}>
                        <h1>
                          PC  Tracker
                        </h1>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                      <Project isMobile={isMobile} page={page} image={pc_tracker}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} style={{alignText: "center"}}>
                    <Collapse orientation="vertical" style={{}} in={page===3}>
                      <Paper style={{backgroundColor: "#0D0C11", borderRadius: "25px", color: "white", boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px",  height: "200px", display: "flex", justifyContent: "center"}} elevation={0}>
                        <p style={{fontSize: "18px", margin: "20px",}}>An application intended for the unique identification of a PC in a discrete way without the user's knowledge, currently this application is used to perform tests remotely.</p>
                      </Paper>
                    </Collapse>
                    </Grid>
                    
              </Grid>

            </Box>
            </div>

          </div>
          <div style={{backgroundColor: "#102424"}} className="section">
            <div className="section2">
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <div className="text2" style={{  justifyContent: "center", display: "flex"}}>
                    <h1>
                      Contact
                    </h1>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Contact page={page}/>
                </Grid>
                <Grid item xs={12} style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                  <div>
                    <IconButton target="_blank" href="https://github.com/codertysmi" aria-label="Github" size="large">
                      <GitHubIcon fontSize="inherit" style={{color:"rgba(255, 255, 255, 0.5)"}}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.fiverr.com/codertysmith" aria-label="Twitter" size="large">
                      <ShoppingBasketIcon fontSize="inherit" style={{color:"rgba(255, 255, 255, 0.5)"}}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://twitter.com/MeFaltaUnVeran" aria-label="Twitter" size="large">
                      <TwitterIcon fontSize="inherit" style={{color:"rgba(255, 255, 255, 0.5)"}}/>
                    </IconButton>
                  </div>
                  <p style={{opacity: "0.5"}}>Alex Portfolio made with React.js</p>
                </Grid>
              </Grid>
            </div>
            
          </div>
        </ReactFullpage.Wrapper>
        
      );
    }}
  />

  </div>
  
  </div>
);
}



export default App;