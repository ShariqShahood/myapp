import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked"+ text);
        const newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "warning")
    }
    const handleLowClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "warning")

    }
    const handleTitleClick = ()=>{
        function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
        }
        const newText = toTitleCase(text);
        setText(newText)
        props.showAlert("Converted to TitleCase", "warning")

    }
    const handleOnChange = (event)=>{
        // console.log("Onchange ws click")
        setText(event.target.value)
    }
    const handleDelClick = ()=>{
        const newText = "";
        setText(newText);
        props.showAlert("Delete Successfull", "danger")

    }
    const handleBoldClick = ()=>{
        setIsBold(!isBold)
        props.showAlert("Converted to Bold", "info")

    }
    const handleItClick = ()=>{
        setIsItalic(!isItalic)    
        props.showAlert("Converted to Italic", "info")
    }
    const handleColor = (event)=>{
        setIsColor(event.target.value)
        props.showAlert("Color Changed", "primary")
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to Clipboard",  "warning")
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Space Remove Successfull", "success")

    }
    
    const [text, setText] = useState('');
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isColor, setIsColor] = useState('#000000')
        // setText("New Text"); 
    return (
        <>
    <div className='container my-3'>
        <h1 className='animate__animated animate__lightSpeedInLeft mb-3' style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea  className="form-control animate__animated animate__lightSpeedInRight" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{border:props.mode==='dark'?'2px solid white':'2px solid black',backgroundColor:props.mode==='dark'?'#ADD8E6':'white',fontWeight:isBold? 'bold': 'normal',fontStyle:isItalic? 'italic': 'normal',color:isColor}}></textarea>
        </div>
        <div className="container">
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 animate__animated" onClick={handleUpClick} >Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 animate__animated " onClick={handleLowClick}>Convert To Lowercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1 animate__animated " onClick={handleTitleClick}>Convert To Titlecase</button>
        <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1 animate__animated" onClick={handleDelClick}>Delete Text</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1 animate__animated" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0}  className="btn btn-success mx-1 my-1 animate__animated" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0}  className="btn btn-warning mx-1 my-1 animate__animated" onClick={handleBoldClick}>𝐁</button>
        <button disabled={text.length===0}  className="btn btn-info mx-1 my-1 animate__animated" onClick={handleItClick}>𝑰 </button>
        <input className='mx-1 my-3 animate__animated' type="color" value={isColor} onChange={handleColor}/>
        </div>
        
    </div>
    <div className="container my-3 mx-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className='animate__animated  animate__lightSpeedInLeft'>Your Text Summary</h2>
        <p className='animate__animated  animate__lightSpeedInRight'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
        {/* <h6>For Minutes</h6> */}
        <p className='animate__animated  animate__lightSpeedInRight'>{0.008 * text.split(" ").filter((time)=>{return time.length !==0}).length} Minutes Read</p>
        <h2 className='animate__animated  animate__lightSpeedInLeft'>Preview</h2>
        <p className='animate__animated  animate__lightSpeedInRight'>{text.length>0?text:'Nothing to Preview!'}</p>
        {/* <h6>For Seconds</h6>
        <p>{0.008 * text.split(" ").length*60} Seconds</p> */}


    </div>
    </>
  )
}
