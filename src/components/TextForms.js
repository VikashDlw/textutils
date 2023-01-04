import React, { useState } from 'react';


export default function TextForms(props) {
    const handleUpClick = () =>{
        //console.log("Upper Case Button Clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = () => {
        
        setText(text.toLocaleLowerCase());
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = () => {
        //console.log("Lower Case Button Clicked");
        setText('');
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event) =>{
       // console.log("On CHange");
        setText(event.target.value);
    }
    const handleCopy = () =>{
        var text=document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success");
        console.log("i am copy Successfull");
     }
     const handleRemoveSpace = () =>{
       let newtext = text.split(/[ ]+/);
       setText(newtext.join(" "));
       props.showAlert("Extra Spaces removed","success");
    }
    const getcount = (str) =>
    {
        return (text===''?0:str.trim().split(/\s+/).length);
    }
    
    const [text, setText] = useState('');
  return (
    <>
    <div style={{ color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3 ">
            <textarea className="form-control" value={text} onChange={handleOnChange}  style={{ backgroundColor: props.mode==='dark'?'#1C2833 ':'white' , color: props.mode==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
            <div className="my-2">
                <button className="btn btn-info mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-info mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-info mx-1 my-1" onClick={handleClearClick}>Clear Form</button>
                <button className="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-info mx-1 my-1" onClick={handleRemoveSpace}>Remove Extra Spaces</button>

            </div>
        </div>
        <div className="container">
            <h3>Your Text Summary</h3>
            <p>{getcount(text.replace(/\s+/g, ' ').trim())} Words and {text.length} Character</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text.replace(/\s+/g, ' ').trim():"Enter Something To check Preview"}</p>
        </div>
    </div>
    </>
  )
}
