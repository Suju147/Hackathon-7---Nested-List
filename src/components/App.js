import { render } from "enzyme";
import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import "./../styles/App.css";
import City from './city';

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
            {
              name:"superCool"
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


function App(){
  //console.log(states[0]);
  const[city1,setCity1]=useState(false);
  const[city2,setCity2]=useState(false);
  const[city3,setCity3]=useState(false);
  const[city4,setCity4]=useState(false);


  const toggleCity=(evt)=>{
    //console.log(evt.target.id);
    if(evt.target.id==="state1")
    {
      setCity1(!city1);
      //console.log("city1",city1);
    }
    if(evt.target.id==="state2")
    {
      setCity2(!city2);
      console.log("city2",city2);
    }
    if(evt.target.id==="state3")
    {
      setCity3(!city3);
    }
     if(evt.target.id==="state4")
    {
      setCity4(!city4);
    }
    
  }
 
  return(
    <div id="main">
     <div id="state1" onClick={toggleCity}>{states[0].name}{city1?<City states={states} id={"state1"} city1={city1}/>:null}</div>
     <div id="state2"  onClick={toggleCity}>{states[1].name}{city2?<City states={states} id={"state2"} city2={city2}/>:null}</div>
     <div id="state3" onClick={toggleCity}>{states[2].name}{city3?<City states={states} id={"state3"} city3={city3}/>:null}</div>
     <div id="state4" onClick={toggleCity}>{states[3].name}{city4?<City states={states} id={"state4"} city4={city4}/>:null}</div>
    </div>
  )
}

export default App;
