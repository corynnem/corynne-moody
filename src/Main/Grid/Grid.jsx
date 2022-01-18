import React from "react";
import URL from '../../environment'
import "./grid.css";
import "../main.css";

const Grid = () => {
  const projects = [
    {
      name: "Task Manager API",
      desc: "An API developed for Eleven Fifty Academy curriculum, relating to creating documentation using Swagger.io. The base backend curriculum is comprised of using Sequelize, an ORM library, to build queries to be executed on an Express.js server, sending the data to a PostgreSQL database, but previously, we did not offer information covering creating documentation for the API's students build. So, I was tasked with researching and developing an application that uses Swagger.io, an npm package that allows users to describe the structure of their API's to automatically populate documentation.",
      img_src: "",
      githubLink: 'https://github.com/corynnem/taskdb',
      deployedLink: 'https://task-database-app.herokuapp.com/api-docs/#/'
    },
    {
      name: "Book Keeping API",
      desc: "Another API developed for Eleven Fifty Academy curriculum meant to take topics the students were familiar with, i.e. express, and postgresql, and introduce them to querying with SQL. I was asked to research and develop an API utilizing node-postgres, an npm package that allows you to use SQL query builders to directly interface with tables in a database, to teach students the pro's and con's of using SQL vs. an ORM. In this project I learned that writing raw SQL queries will always be quicker than using an ORM due to the ability to directly manipulate tables in a given database.",
      img_src: "",
      githubLink: 'https://github.com/corynnem/SQL',
      deployedLink: `${URL}/notdeployed`
    },
    {
      name: "VenYou API",
      desc: "A personal project made to act as a third party to assist artists to find venues to perform in and venues to find artists to perform. It is a simple API with user and manager priveleges, managers being able to create, read, update, and delete their own venues, and users having the ability to read venues. A front-end React application is in the process of being built to utilize this API. ",
      img_src: "",
      githubLink: 'https://github.com/corynnem/VenYou',
      deployedLink: 'https://vy-backend.herokuapp.com/api-docs/'
    },
    {
      name: "Hangman",
      desc: "A React.js application built for personal growth and practice. During my time as a developer I have struggled to complete applications due to getting busy with work, life, etc, so my main goal for the Hangman app was completion. It taught me a very valuable lesson about developing, being stick with the minimum viable product and improvments can always come later.",
      img_src: "",
      githubLink: 'https://github.com/corynnem/hangman',
      deployedLink: 'https://basic-hangman.herokuapp.com/'
    },
    {
      name: "Weather App",
      desc: "A simple weather application created with React.js and TypeScript, to practice improving application speeds. Utilizing stateful class components to load in external data from the weather API and handle the bulk of the functionality and stateless functional components to display said data, I was able to optimize the performance of the simple application. ",
      img_src: "",
      githubLink: 'https://github.com/corynnem/weather-fetch.git',
      deployedLink: 'https://weather-gify.herokuapp.com/'
    },
    {
      name: "Fill in the Blank Syntax Challenges",
      desc: "3 web pages built with HTML, CSS, and JavaScript for Eleven Fifty Academy students who felt they needed extra practice with JavaScript syntax without the complexity of problem solving associated with it. ",
      img_src: "",
      githubLink: 'https://github.com/corynnem/EFA-Gold-Syntax-Challenges',
      deployedLink: 'https://corynnem.github.io/week-2-challenges/'
    },
  ];

  return (
    <div id="grid-container">
      <div id="apps">
        {projects.map((item, i) => {
          return (
            <div class="app">
              <h1>{item.name}</h1>
              <p>{item.desc}</p>
              <div style={{display: 'flex' }} id="buttons">
                <a href={item.deployedLink} target="_blank">
                  <button>Deployed Link</button>
                </a>
                <a href={item.githubLink} target="_blank">
                  <button>Github Link</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
