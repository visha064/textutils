import React, { useState } from 'react'


export default function TextArea(props) {

    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const texting = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
    }

    const upcase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowcase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const reset = () => {
        let newText = "";
        setText(newText);
        props.showalert("text has been cleared!","success")
    }

    const wordcount = () => {
        if (text.length == 0) {
            return 0
        } else {
            return text.split(" ").length;
        }
    }

    const text1area = (event) => {
        setText1(event.target.value);
    }

    const text2area = (event) => {
        setText2(event.target.value);
    }

    const replace = () => {

        let newText = text.replaceAll(text1, text2);
        setText(newText);

    }

    return (
        <div className={`container my-4 text-${props.mode === "light" ? "dark" : "light"}`}>
            <div className="mb-3 ">
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{
                    backgroundColor: props.mode === "light" ? "white" : "grey",
                    color: props.mode === "light" ? "black" : "white"
                }} value={text} onChange={texting}

                    placeholder='enter your text here'
                    id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-2" onClick={upcase}>Upper Case</button>
            <button className="btn btn-primary me-2" onClick={lowcase}>Lower Case</button>
            <button className="btn btn-primary" onClick={reset}>Clear</button>
            <div className='container my-4'>
                <button className="btn btn-primary mx-2" onClick={replace}>Replace</button>
                <input type="text" style={{
                    backgroundColor: props.mode === "light" ? "white" : "grey",
                    color: props.mode === "light" ? "black" : "white"
                }} className='mx-2' name="" id="" value={text1} onChange={text1area} /> to
                <input type="text" style={{
                    backgroundColor: props.mode === "light" ? "white" : "grey",
                    color: props.mode === "light" ? "black" : "white"
                }} className='mx-4' name="" id="" value={text2} onChange={text2area} />
            </div>
            <h6 className='my-3'>Word Count: {text.split(" ").length}  and  Character Count: {text.length}</h6>
            <h6>{0.008 * text.split(" ").length} Minutes read</h6>
            <h3>Preview</h3>
            <p>{text.length>0?text:"preview of your text is shown here"}</p>

        </div>
    )
}
