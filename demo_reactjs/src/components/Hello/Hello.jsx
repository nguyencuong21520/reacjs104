import React from 'react';
import './Hello.css';
const Hello = (props) => {
    const school = "MindX Technology School";
    const age = props.age;
    const name = props.name;
    return (
        <div className='hello-container'>
            <h1>Xin chào {name}</h1>
            <h1 style={{color: "red", backgroundColor: "blue"}}>Bạn là người {age > 20 ? "trưởng thành" : "trẻ con"}</h1>
            <p>Hello everyone, welcome to {school}</p>
        </div>
    )
}

export default Hello;