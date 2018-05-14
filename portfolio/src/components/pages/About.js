import React from "react";
import "../assets/style.css";

const About = () => ( <
    div >
    <
    h1 className = "header"> About Me < /h1> <
    img src = { require("../assets/daniel.jpg") } className = "portfolioPic"
    /> <div className= "bodyText"><
    p > My name is Daniel and I attend the Georgia Tech Coding Bootcamp.I graduated from the University of Georgia with a bachelor 's degree from the University of Georgia. </p> <
    p > Upon graduating in 2015, I started my career in retail management with Kohl 's. After finishing a three month training program, I was placed in Athens, GA as an Assistant Store Manager. While at Kohl'
    s, I oversaw a team of over 80 part - time and full - time employees
    while managing departments that totaled in over $10 million in yearly revenue.I utilized the business acumen skills I learned in my training to ensure steady improvement in sales
    while using my leadership skills to ensure a friendly and productive atmosphere
    for employees and customers. < /p>

    <
    p > After two years of working at Kohl 's, I realized I needed a career change. I thoroughly enjoyed my job and my coworkers, but in order to excel in my desired career field, I needed to find a career I was passionate about. In March 2016, I left my job at Kohl'
    s and moved to Atlanta.I accepted an offer as an Account Coordinator at Equipment Management Group, a small firm that specializes in providing low - cost dumpsters and equipment to contractors. < /p>
    </div> <
    /div>
);

export default About;