import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("")
    const handleUpClick=()=>{
        // console.log("Upper Case was Clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Uppercase converted','success')
  
    }
    const handleLoClick=()=>{
        // console.log("Upper Case was Clicked"+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('LowerCase converted','success')
    }
    const handleClearClick=()=>{
        // console.log("Upper Case was Clicked"+text)
        // let newText=text.toLowerCase();
        setText("")
        props.showAlert('Text Cleared converted','success')
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges()
        props.showAlert('Copied to Clipboard','success')
    }
    const handleOnChange=(event)=>{
        // console.log("ONChange was Clicked")
        setText(event.target.value)
    }
    return (
        <div>
            
            <div className=" container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}value={text} style={{backgroundColor:props.mode==='dark'?'#1a1741':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
                <button disabled={text.length===0} className="btn btn-primary m-4" onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary m-4" onClick={handleLoClick}>Convert to Lower Case</button>
                <button disabled={text.length===0}className="btn btn-primary m-4" onClick={handleClearClick}>Convert to Lower Case</button>
                <button disabled={text.length===0}className="btn btn-primary m-4" onClick={handleCopy}>Copy text</button>
            </div>

            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=> element.length!==0).length} words {text.length} characters</p>
                <p>You will read it in {0.008 * text.split(" ").filter((element)=> element.length!==0).length} minutes </p>
                <h2>Preview</h2>
                <p>{text?text:"Nothing To Preview"}</p>
            </div>
        </div>
    )
}
