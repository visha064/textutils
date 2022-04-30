import React, { useState } from 'react'

export default function About() {

    const [mystyle, setmystyle] = useState({
        backgroundColor: "white",
        color: "black"
    });

    const [mode, setMode] = useState("Enable Dark mode");

    const toggleMode = () => {
        
        if (mystyle.color === "black") {
            setmystyle({
                backgroundColor: "black",
                color: "white"
            })
            setMode("Enable Light mode");
        } else {
            setmystyle({
                backgroundColor: "white",
                color: "black"
            })
            setMode("Enable Dark mode");
        }
    }

    return (
        <div className='container my-4' style={mystyle}>
        <div style="padding:100px 50px">
            TextUtils is an application build with react javascript library it can help its user to change its text to user dessired needs<br></br>
            you can change the text to lower case <br></br>
            you can change the text to upper case<br></br>
            you can replace word or sentence with a new word or sentence
            </div>
            <button className="btn btn-primary m-4" onClick={toggleMode}>{mode}</button>
        </div>
    )
}
