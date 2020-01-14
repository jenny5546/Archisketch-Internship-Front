import React from 'react';

const SecondTutorial=(props)=>{
    

    const saveAndContinue = (e) =>{
        e.preventDefault()
        props.nextStep()
        
    }
    const back  = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    
    return(
        <div className= "tutorial__container-content">

            <div className= "tutorial__slides-img">
                <img></img>
            </div>
            <div className= "tutorial__slides-text">
                <p1 style={{color: "grey"}}>1. Upload Your Floor Plan Image</p1>
                <br></br>
                <p1 style={{fontSize: "23px", fontWeight:"normal"}}>2. Choose <p1 style={{color: "#499fb6"}}>Floor Styles</p1></p1>
                <br></br>
                <p1 style={{color: "grey"}}>3. Feel Free to tell us whatever else you want!</p1>
            </div>
            <button onClick={back}> Back </button>
            <button onClick={saveAndContinue}> Next </button>
        </div>
    );
}
export default SecondTutorial;