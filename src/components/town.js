import React from 'react';
import './town.css';

function town(props)
{
    //console.log("city1",props.city1);
    if(props.city1)
    {
        console.log(props.id);
        if(props.id==="city1")
        {
            console.log(props.state[0].cities[0].towns[0].name);
            return<div className="towns">
                <div id="town1">{props.state[0].cities[0].towns[0].name}</div>
                <div id="town2">{props.state[0].cities[0].towns[1].name}</div>
            </div>
        }
        else if(props.id==="city2")
        {
            return<div className="towns">
                <div id="town1">{props.state[0].cities[1].towns[0].name}</div>
                <div id="town2">{props.state[0].cities[1].towns[1].name}</div>
            </div>
        }
        else if(props.id==="city3")
        {
            return<div className="towns">
                <div id="town1">{props.state[0].cities[2].towns[0].name}</div>
                
            </div>
        }
        else
        {
            return <div>{null}</div>
        }
    }
    else if(props.city2)
    {
        console.log(props.id);
        if(props.id==="city1")
        {
            console.log(props.state[0].cities[0].towns[0].name);
            return<div className="towns">
                <div id="town1">{props.state[1].cities[0].towns[0].name}</div>
                <div id="town2">{props.state[1].cities[0].towns[1].name}</div>
            </div>
        }
        else if(props.id==="city2")
        {
            return<div className="towns">
                <div id="town1">{props.state[1].cities[1].towns[0].name}</div>
                <div id="town2">{props.state[1].cities[1].towns[1].name}</div>
            </div>
        }
        else if(props.id==="city3")
        {
            return<div className="towns">
                <div id="town1">{props.state[1].cities[2].towns[0].name}</div>
                <div id="town2">{props.state[1].cities[2].towns[1].name}</div>
                
            </div>
        }
        else
        {
            return <div>{null}</div>
        }
    }
    else if(props.city3)
    {
        console.log(props.id);
        if(props.id==="city1")
        {
            console.log(props.state[0].cities[0].towns[0].name);
            return<div className="towns">
                <div id="town1">{props.state[2].cities[0].towns[0].name}</div>
                <div id="town2">{props.state[2].cities[0].towns[1].name}</div>
            </div>
        }
        else if(props.id==="city2")
        {
            return<div className="towns">
                <div id="town1">{props.state[2].cities[1].towns[0].name}</div>
                <div id="town2">{props.state[2].cities[1].towns[1].name}</div>
            </div>
        }
        else if(props.id==="city3")
        {
            return<div className="towns">
                <div id="town1">{props.state[2].cities[2].towns[0].name}</div>
                
                <div id="town1">{props.state[2].cities[2].towns[1].name}</div>
            </div>
        }
        else
        {
            return <div>{null}</div>
        }
    }
    if(props.city4)
    {
        console.log(props.id);
        if(props.id==="city1")
        {
            console.log(props.state[0].cities[0].towns[0].name);
            return<div className="towns">
                <div id="town1">{props.state[3].cities[0].towns[0].name}</div>
                <div id="town2">{props.state[3].cities[0].towns[1].name}</div>
            </div>
        }
        else if(props.id==="city2")
        {
            return<div className="towns">
                <div id="town1">{props.state[3].cities[1].towns[0].name}</div>
                <div id="town2">{props.state[3].cities[1].towns[1].name}</div>
            </div>
        }
        else if(props.id==="city3")
        {
            return<div className="towns">
                <div id="town1">{props.state[3].cities[2].towns[0].name}</div>
                <div id="town2">{props.state[3].cities[2].towns[1].name}</div>
                
            </div>
        }
        else
        {
            return <div>{null}</div>
        }
    }
    else{
        return<div>{null}</div>
    }
}
export default town;