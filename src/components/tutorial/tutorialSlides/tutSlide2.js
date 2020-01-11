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
        <div>
            Second Tutorial
            <button onClick={back}> Back </button>
            <button onClick={saveAndContinue}> Next </button>
        </div>
    );
}
export default SecondTutorial;