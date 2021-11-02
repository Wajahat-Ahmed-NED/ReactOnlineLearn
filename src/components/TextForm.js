import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("")
    const handleUpClick=()=>{
        // console.log("Upper Case was Clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        // console.log("Upper Case was Clicked"+text)
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        // console.log("Upper Case was Clicked"+text)
        // let newText=text.toLowerCase();
        setText("")
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange=(event)=>{
        // console.log("ONChange was Clicked")
        setText(event.target.value)
    }
    return (
        <div>
            
            <div className="mb-3 container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
                <button className="btn btn-primary m-4" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary m-4" onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-primary m-4" onClick={handleClearClick}>Convert to Lower Case</button>
                <button className="btn btn-primary m-4" onClick={handleCopy}>Copy text</button>
            </div>

            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>You will read it in {0.008 * text.split(" ").length} minutes </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
