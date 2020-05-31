import React from 'react';
import '../App.css';
import { queryAllByPlaceholderText } from '@testing-library/react';

function InfoSection(){
    return(
<div>
    <h2>About Me</h2>
    <p>A former marketer and outreach worker embarking on a new adventure into the world of tech.</p>
    <p></p>
    <h2>Previous xperience</h2>
    <p>As a qualified I have developed a broad range of transferable skills including:</p>


    <p>Industries I have worked include:</p>
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