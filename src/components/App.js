import { render } from "enzyme";
import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwadivor",
        towns: [
          {
            name: "Ajaypur"},
            {name: "cool"
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const cityfun=(city)=>{
    console.log(city.target);
    if(city.target.className==="state1")
    {if(city.target.id==="city1") 
    {console.log("1");
      ReactDOM.render((<div>
        <div id="town1">{states[0].cities[0].towns[0].name}</div>
        <div id="town2">{states[0].cities[0].towns[1].name}</div>
      </div>),document.getElementById("city1"));
    }
    else if(city.target.id==="city2")
    {console.log("2")
      ReactDOM.render((<div>
        <div id="town1">{states[0].cities[1].towns[0].name}</div>
        <div id="town2">{states[0].cities[1].towns[1].name}</div>
      </div>),document.getElementById("city2"));}

     else if(city.target.id==="city3")
      {
        console.log("3");
        ReactDOM.render((<div>
          <div id="town1">{states[0].cities[2].towns[0].name}</div>
          <div id="town2">{states[0].cities[2].towns[1].name}</div>
        </div>),document.getElementById("city3"));
      }}
      else if(city.target.className==="state2")
      {
        if(city.target.id==="city1") 
    {console.log("1");
      ReactDOM.render((<div>
        <div id="town1">{states[1].cities[0].towns[0].name}</div>
        <div id="town2">{states[1].cities[0].towns[1].name}</div>
      </div>),document.getElementById("city1"));
    }
    else if(city.target.id==="city2")
    {console.log("2")
      ReactDOM.render((<div>
        <div id="town1">{states[1].cities[1].towns[0].name}</div>
        <div id="town2">{states[1].cities[1].towns[1].name}</div>
      </div>),document.getElementById("city2"));}

     else if(city.target.id==="city3")
      {
        console.log("3");
        ReactDOM.render((<div>
          <div id="town1">{states[1].cities[2].towns[0].name}</div>
          <div id="town2">{states[1].cities[2].towns[1].name}</div>
        </div>),document.getElementById("city3"));
      }

      }

      else if(city.target.className==="state3")
      {
        if(city.target.id==="city1") 
    {console.log("1");
      ReactDOM.render((<div>
        <div id="town1">{states[2].cities[0].towns[0].name}</div>
        <div id="town2">{states[2].cities[0].towns[1].name}</div>
      </div>),document.getElementById("city1"));
    }
    else if(city.target.id==="city2")
    {console.log("2")
      ReactDOM.render((<div>
        <div id="town1">{states[2].cities[1].towns[0].name}</div>
        <div id="town2">{states[2].cities[1].towns[1].name}</div>
      </div>),document.getElementById("city2"));}

     else if(city.target.id==="city3")
      {
        console.log("3");
        ReactDOM.render((<div>
          <div id="town1">{states[2].cities[2].towns[0].name}</div>
          <div id="town2">{states[2].cities[2].towns[1].name}</div>
        </div>),document.getElementById("city3"));
      }
      }

      else if(city.target.className==="state4")
      {
        if(city.target.id==="city1") 
    {console.log("1");
      ReactDOM.render((<div>
        <div id="town1">{states[3].cities[0].towns[0].name}</div>
        <div id="town2">{states[3].cities[0].towns[1].name}</div>
      </div>),document.getElementById("city1"));
    }
    else if(city.target.id==="city2")
    {console.log("2")
      ReactDOM.render((<div>
        <div id="town1">{states[3].cities[1].towns[0].name}</div>
        <div id="town2">{states[3].cities[1].towns[1].name}</div>
      </div>),document.getElementById("city2"));}

     else if(city.target.id==="city3")
      {
        console.log("3");
        ReactDOM.render((<div>
          <div id="town1">{states[3].cities[2].towns[0].name}</div>
          <div id="town2">{states[3].cities[2].towns[1].name}</div>
        </div>),document.getElementById("city3"));
      }
      }
    
  }

  const statefun=(state)=>{
    if(state.target.id==='state1')
    {console.log(state.target);
    ReactDOM.render(
      (<div id="1"><div id="city1" className="state1" onClick={cityfun}>{states[0].cities[0].name}</div>
    <div id="city2" className="state1" onClick={cityfun}>{states[0].cities[1].name}</div>
    <div id="city3" className="state1" onClick={cityfun}>{states[0].cities[2].name}</div></div>),document.getElementById("state1"));
    }
    else if(state.target.id==='state2')
    {ReactDOM.render((<div id="2"><div id="city1" className="state2" onClick={cityfun}>{states[1].cities[0].name}</div>
    <div id="city2" className="state2" onClick={cityfun}>{states[1].cities[1].name}</div>
    <div id="city3" className="state2" onClick={cityfun}>{states[1].cities[2].name}</div></div>),document.getElementById("state2"));
    }
    else if(state.target.id==='state3')
    {ReactDOM.render((<div id="3"><div id="city1" className="state3" onClick={cityfun}>{states[2].cities[0].name}</div>
    <div id="city2"className="state3" onClick={cityfun}>{states[2].cities[1].name}</div>
    <div id="city3"  className="state3" onClick={cityfun}>{states[2].cities[2].name}</div></div>),document.getElementById("state3"));}

    else if(state.target.id==='state4')
    {ReactDOM.render((<div id="4"><div id="city1" className="state4" onClick={cityfun}>{states[3].cities[0].name}</div>
    <div id="city2" className="state4" onClick={cityfun}>{states[3].cities[1].name}</div>
    <div id="city3"className="state4" onClick={cityfun}>{states[3].cities[2].name}</div></div>),document.getElementById("state4"));
    }
    
  }
  return <div id="main">
    <div id="state1" onClick={statefun}>{states[0].name}</div>
    <div id="state2" onClick={statefun}>{states[1].name}</div>
    <div id="state3" onClick={statefun}>{states[2].name}</div>
    <div id="state4" onClick={statefun}>{states[3].name}</div>
    
  </div>;
}

export default App;
