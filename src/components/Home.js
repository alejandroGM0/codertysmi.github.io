import React from 'react';
import './styles/Home.css';
import logo from './logo.png';
import Links from './Links';
import Footer from './Footer'


const Home = () =>{


    document.title = 'MeFaltaUnVerano';

    return(

        
        <section>
            <div className='overlay'>
                
                <Links />
                <img className='logo' src={logo} alt="Logo" />
                <div className="typewriter">
                    <h1 className='text'>MeFaltaUnVerano</h1>
                </div>
                <Footer />
            </div>
        </section>
    );
}



export default Home;