import React from 'react'

const person=(props)=>{
    return (
        <div>
        <p>I'm  person {props.name} and {props.age} years old</p>
        <p>{props.children}</p>
        </div>
    )
};

export default person;