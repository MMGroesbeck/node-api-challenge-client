import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import './App.css';
import Project from "./Project.js";

function App() {
  const [ projectList, setProjectList ] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5004/api/projects")
    .then(res => {
      console.log(res);
      setProjectList(res);
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Projects and actions!
        </p>
      </header>
      <div className="project-list">
        {projectList.map(project => (
            <p>Name:{` ${project.name}`}</p> 
        ))}
      </div>
    </div>
  );
}

export default App;
