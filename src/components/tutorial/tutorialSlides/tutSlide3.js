import React from 'react';

const LastTutorial=(props)=>{
    

    const back  = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return(
        <div>
            3. Feel Free to tell us Whatever else you Want
            <button onClick={back}> Back </button>
        </div>
    );
}
export default LastTutorial;