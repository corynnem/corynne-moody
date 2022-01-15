import React from "react";
import "./grid.css";
import "../main.css";

const Grid = () => {
  const projects = [
    {
      name: "Book Keeping API",
      desc: "Developed for Eleven Fifty Academy curriculum meant to take topics the students were familiar with, i.e. express, and postgresql, and introduce them to querying with SQL. I was asked to research and develop an API utilizing node-postgres, an npm package that allows you to use SQL query builders to directly interface with tables in a database, to teach students the pro's and con's of using SQL vs. an ORM. This is one of the many awesome learning opportunities I had while working at Eleven Fifty, and ",
      img_src: "",
    },
    {
      name: "Task Manager API",
      desc: "Developed for Eleven Fifty Academy curriculum meant to take topics the students were familiar with, i.e. express, and postgresql, and introduce them to querying with SQL. I was asked to research and develop an API utilizing node-postgres, an npm package that allows you to use SQL query builders to directly interface with tables in a database, to teach students the pro's and con's of using SQL vs. an ORM. This is one of the many awesome learning opportunities I had while working at Eleven Fifty, and ",
      img_src: "",
    },
  ];

  return (
    <div id="outer-container">
      <div id="apps">
        <div class="app">ONE</div>
        <div class="app">TWO</div>
        <div class="app">THREE</div>
        <div class="app">FOUR</div>
        <div class="app">FIVE</div>
        <div class="app">SIX</div>
        <div class="app">SEVEN</div>
        <div class="app">EIGHT</div>
        <div class="app">NINE</div>
        <div class="app">TEN</div>
        <div class="app">ELEVEN</div>
        <div class="app">TWELVE</div>
      </div>
    </div>
  );
};

export default Grid;
