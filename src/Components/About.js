import React, {useState} from 'react'

export default function About() {
    
    const [myStyle,setMyStyle]= useState({
        color: "black",
        backgroundColor: "white"})
    const [btnText,setBtnText] = useState("Enable Dark Mode")
        
    const toggleStyle= ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid #24a0ed',
                borderRadius:'15px'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:'1px solid grey',
                borderRadius:'25px'

            })
            setBtnText("Enable Dark Mode")
        }
    }
    
    return (
        <div className="container p-3" style={myStyle}>
            <h1 className='my-3 animate__animated animate__lightSpeedInLeft'><center>Created By SHARIQ SHAHOOD</center></h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item"  style={myStyle}>
                    <h2 className="accordion-header ">
                        <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong className='animate__animated animate__lightSpeedInLeft'>Education</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body animate__animated animate__lightSpeedInRight">
                            <ul>
                           <li>Currently,I am pursuing my degree in <strong>BSCS</strong> From <strong>PAF-KIET</strong><br/></li> 
                            <li>And Exploring <strong>TypeScript</strong> at Governer IT Initiative <strong>GI-AIWMD</strong><br /></li>
                            <li>Also Doing Course Of <strong>MERN Stack Development</strong> at <strong>SMIT</strong></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong className='animate__animated animate__lightSpeedInLeft'>Portfolio</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body animate__animated animate__lightSpeedInRight">
                            shariqshahood.netlify.app
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong className='animate__animated animate__lightSpeedInLeft'>What is TextUtils Website</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body animate__animated animate__lightSpeedInRight">
                        TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button.                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
            <button type='button' className='btn btn-primary  animate__animated' onClick={toggleStyle}>{btnText}</button>
            </div>
        </div>
    )
}
