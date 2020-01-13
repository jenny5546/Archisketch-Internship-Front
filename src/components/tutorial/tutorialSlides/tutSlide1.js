import React from 'react';

const FirstTutorial =(props)=>{
    
    const saveAndContinue = (e) =>{
        e.preventDefault()
        props.nextStep()
        
    }
    return(
        <div>
            1. Upload Your Floor Plan Image
            <button onClick={saveAndContinue}> Next </button>
        </div>
    );
    
}
export default FirstTutorial;