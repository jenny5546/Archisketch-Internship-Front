import React from 'react';

const FirstTutorial =(props)=>{
    
    const next = (e) =>{
        e.preventDefault()
        props.nextStep()
        
    }
    return(
        <div className= "tutorial__container-content">

            <div className= "tutorial__slides-img">
                <img></img>
            </div>
            <div className= "tutorial__slides-text">
                <p1 style={{fontSize: "23px", fontWeight:"normal"}}>1. Upload Your <p1 style={{color: "#499fb6"}}>Floor Plan Image</p1></p1>
                <br></br>
                <p1 style={{color: "grey"}}>2. Choose Floor Styles</p1>
                <br></br>
                <p1 style={{color: "grey"}}>3. Feel Free to tell us whatever else you want!</p1>
            </div>
            
            <button onClick={next}> Next </button>
        </div>
    );
    
}
export default FirstTutorial;