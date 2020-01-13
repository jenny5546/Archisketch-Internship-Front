import React from 'react';

const FirstTutorial =(props)=>{
    
    const saveAndContinue = (e) =>{
        e.preventDefault()
        props.nextStep()
        
    }
    return(
        <div>
            Tutorial One 
            <button onClick={saveAndContinue}> Next </button>
        </div>
    );
    
}
export default FirstTutorial;