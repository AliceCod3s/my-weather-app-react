import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      
<div className="container"> 

     <Weather defaultCity="New York" />
      <footer>
        Project coded by Alice Gitman{" "} 
      <a href="https://github.com/AliceCod3s/my-weather-app-react" target="_blank">
     open-sourced on GitHub 
     </a>
      </footer>
      </div>

    </div>
  );
}

