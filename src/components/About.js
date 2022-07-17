import React from "react";
import './Components.css'
import { Image } from '@mantine/core';



const About = () => {
    return (
        <section>   
            <h1>Welcome to my Portfolio!</h1>
            <div>
                <Image src='./me.jpg' alt='me' style={{ width:450, margin: 'auto' }}/>
                <p>
                My name is Carrie, let me take you through my journey. I started this bootcamp in February 2022. Although the modules are inconsistent, I am almost done. The biggest take away from this is the connections that have been created with the immediate staff and the classmates. I am very grateful for the opportunity to learn and grow with the people I have met.
                </p>
            </div>
    
        </section>
    )
}

export default About;