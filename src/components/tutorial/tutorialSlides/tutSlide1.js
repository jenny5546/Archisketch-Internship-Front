import React from 'react';

const FirstTutorial =(props)=>{
    
    const saveAndContinue = (e) =>{
        e.preventDefault()
        // console.log(props)
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