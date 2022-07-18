import React from 'react';
import './Components.css'
import { Tabs } from '@mantine/core';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';




const Navbar = () => {
    return (
        <Tabs color="pink" variant="outline" tabPadding="xl">
            <Tabs.Tab label="About" >
                <About />
            </Tabs.Tab>
            <Tabs.Tab label="Project">
                <Project />
            </Tabs.Tab>
            <Tabs.Tab label="Contact">
                <Contact/>
            </Tabs.Tab>
            <Tabs.Tab label="Resume">
                <Resume/>
            </Tabs.Tab>
        </Tabs>
    )
}

export default Navbar;