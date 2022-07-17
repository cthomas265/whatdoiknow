import React from 'react';
import '../Components.css'
import { Tabs } from '@mantine/core';



const Navbar = () => {
    return (
        <Tabs color="pink" variant="outline" tabPadding="xl">
            <Tabs.Tab label="About" ><a href='/About'>About</a></Tabs.Tab>
            <Tabs.Tab label="Project"><a href='/Project'>Project</a></Tabs.Tab>
            <Tabs.Tab label="Contact"><a href='/Contact'>Contact</a></Tabs.Tab>
            <Tabs.Tab label="Resume"><a href='./Resume'>Resume</a></Tabs.Tab>
        </Tabs>
    )
}

export default Navbar;