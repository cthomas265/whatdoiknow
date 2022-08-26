import React from "react";
import './Components.css'
import { Image } from '@mantine/core';



const About = () => {
    return (
        <section className='about'>   
            <h1>Welcome to my Portfolio!</h1>
            <div>
                <Image src='./me.jpg' alt='me' style={{ width:450, margin: 'auto' }}/>
                <p>
                My name is Carrie, let me take you through my journey. I started this 6 month bootcamp in February 2022. With every week there were ups and downs, learning my strengths and weaknesses. 
                <br>
                </br>The biggest take away from this is the connections that have been created with staff and classmates. I am very grateful for the opportunity to learn and grow with strong supportive people.
                </p>
            </div>
    
        </section>
    )
}

export default About;