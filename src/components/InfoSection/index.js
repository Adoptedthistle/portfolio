import React from 'react';
import '../App.css';
import { queryAllByPlaceholderText } from '@testing-library/react';

function InfoSection(){
    return(
<div id="infoSection">
    <h2>About Me</h2>
    <p>A former marketer and outreach worker embarking on a new adventure into the world of tech.</p>
    <p></p>
    
    <h2>Previous work experience</h2>
    <p>As a qualified marketer I have developed a broad range of transferable skills including:</p>
    <ul>
        <li>Communication</li>
        <li>Project Management</li>
        <li>Teamwork</li>
        <li>Problem Solving</li>
        <li>Line Management</li>
    </ul>


    <p>Industries I have previously worked in include:</p>
    <ul>
    <li>Higher Education, specifically Arts, Design, Humanities, Social Sciences and Technology</li>
    <li>Book Publishing</li>
    <li>Design (Agency)</li>
    </ul>
    <h2>Technical Skills</h2>

</div>
    );
}


export default InfoSection;