import React from "react";
import "./grid.css";
import "../main.css";

const Grid = () => {
  const projects = [
    {
      name: "Book Keeping API",
      desc: "An API developed for Eleven Fifty Academy curriculum meant to take topics the students were familiar with, i.e. express, and postgresql, and introduce them to querying with SQL. I was asked to research and develop an API utilizing node-postgres, an npm package that allows you to use SQL query builders to directly interface with tables in a database, to teach students the pro's and con's of using SQL vs. an ORM. In this project I learned that writing raw SQL queries will always be quicker than using an ORM due to the ability to directly change tables in a given database.",
      img_src: "",
      githubLink: 'https://github.com/corynnem/SQL',
      deployedLink: ''
    },
    {
      name: "Task Manager API",
      desc: "Another application developed for Eleven Fifty Academy curriculum, relating to creating documentation using Swagger.io. The base backend curriculum is comprised of using Sequelize, an ORM library, to build queries to be executed on an Express.js server, sending the data to a PostgreSQL database, but previously, we did not offer information covering creating documentation for the API's students build. So, I was tasked with researching and developing an application that uses Swagger.io, an npm package that allows users to describe the structure of their API's to automatically populate documentation.",
      img_src: "",
      githubLink: 'https://github.com/corynnem/taskdb',
      deployedLink: 'https://task-database-app.herokuapp.com/api-docs/#/'
    },
    {
      name: "Hangman",
      desc: "A React.js application I built for personal growth and practice. During my time as a developer I have struggled to complete entire applications due to getting busy with work, life, etc, so my main goal for the Hangman app was completion. It taught me a very valuable lesson about developing, being stick with the minimum viable product and improvments can always come later.",
      img_src: "",
      githubLink: 'https://github.com/corynnem/hangman',
      deployedLink: 'https://basic-hangman.herokuapp.com/'
    },
    {
      name: "Weather App",
      desc: "TypeScript, React",
      img_src: "",
      githubLink: 'https://github.com/corynnem/weather-fetch.git',
      deployedLink: 'https://weather-gify.herokuapp.com/'
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
              <div style={{display: 'flex', }}>
                <a href={item.deployedLink} target="_blank">
                  <button>Deployed Project</button>
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
