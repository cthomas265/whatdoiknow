import React from "react";
import "./Components.css";
import resume from '../Resume.docx';

const Resume = () => {
    return (
        
        <div className="resume">
                <ul className='icons'>
                    <i className="devicon-html5-plain "></i>
                    <i className="devicon-css3-plain-wordmark"></i>
                    <i className="devicon-github-original-wordmark colored"></i>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-react-original"></i>
                    <i className="devicon-nodejs-plain"></i>
                    <i className="devicon-mongodb-plain"></i>
                    <i className="devicon-bootstrap-plain"></i>
                    <i className="devicon-jquery-plain-wordmark"></i>
                    <i className="devicon-mysql-plain-wordmark"></i>
                    <i className="devicon-sequelize-plain-wordmark"></i>
                    <i className="devicon-express-original"></i>
                    <i className="devicon-heroku-original"></i>
                    <i className="devicon-visualstudio-plain"></i>
                    <li>NoSQL</li>
                    <li>Mongoose</li>

                </ul>
            <a href={resume} download>Click to download</a>
        </div>
    )
}



export default Resume;