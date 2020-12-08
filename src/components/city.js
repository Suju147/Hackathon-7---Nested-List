import React, { useState } from 'react';
import './city.css';
import Town from './town';

function city(props) {
    const state={...props.states};

    const[town1,setTown1]=useState(false);
    const[town2,setTown2]=useState(false);
    const[town3,setTown3]=useState(false);

    const city1=props.city1;
    const city2=props.city2;
    const city3=props.city3;
    const city4=props.city4;
  
    
    const toggleTown=(evt)=>
    {
        console.log("town",evt.target.id);
        if(evt.target.id==="city1")
        {
            setTown1(!town1);
            console.log("town1",town1);
        }
        if(evt.target.id==="city2")
        {
            setTown2(!town2);
        }
        if(evt.target.id==="city3")
        {
            setTown3(!town3);
        }

    }

    if(props.id==="state1")
    {
       return<div className="cities"><div id="city1" onClick={toggleTown}>{props.states[0].cities[0].name}{town1?<Town state={state} id={"city1"} city1={city1}/>:null}</div>
               <div id="city2" onClick={toggleTown}>{props.states[0].cities[1].name}{town2?<Town state={state} id={"city2"} city1={city1}/>:null}</div>
               <div id="city3" onClick={toggleTown}>{props.states[0].cities[2].name}{town3?<Town state={state} id={"city3"} city1={city1}/>:null}</div></div>;
    }
    else if(props.id==="state2")
    {
        console.log(props.states[1].cities[0].name)
       return<div className="cities" ><div id="city1" onClick={toggleTown}>{props.states[1].cities[0].name}{town1?<Town state={state} id={"city1"} city2={city2}/>:null}</div>
               <div id="city2" onClick={toggleTown}>{props.states[1].cities[1].name}{town2?<Town state={state} id={"city2"} city2={city2}/>:null}</div>
               <div id="city3" onClick={toggleTown}>{props.states[1].cities[2].name}{town3?<Town state={state} id={"city3"} city2={city2}/>:null}</div></div>;
    }
    else if(props.id==="state3") {
        return<div className="cities"><div id="city1" onClick={toggleTown}>{props.states[2].cities[0].name}{town1?<Town state={state} id={"city1"} city3={city3}/>:null}</div>
               <div id="city2" onClick={toggleTown}>{props.states[2].cities[1].name}{town2?<Town state={state} id={"city2"} city3={city3}/>:null}</div>
               <div id="city3" onClick={toggleTown}>{props.states[2].cities[2].name}{town3?<Town state={state} id={"city3"} city3={city3} />:null}</div></div>;
    }
    else if(props.id==="state4") {
        return<div className="cities"><div id="city1" onClick={toggleTown}>{props.states[3].cities[0].name}{town1?<Town state={state} id={"city1"} city4={city4}/>:null}</div>
               <div id="city2" onClick={toggleTown}>{props.states[3].cities[1].name}{town2?<Town state={state} id={"city2"} city4={city4}/>:null}</div>
               <div id="city3" onClick={toggleTown}>{props.states[3].cities[2].name}{town3?<Town state={state} id={"city3"} city4={city4}/>:null}</div></div>;
    }
    else 
    {
        return<div>{null}</div>;
    }

}
export default city;