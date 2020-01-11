import React from 'react';

const LastTutorial=(props)=>{
    

    const back  = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return(
        <div>
            Last Tutorial
            <button onClick={back}> Back </button>
        </div>
    );
}
export default LastTutorial;