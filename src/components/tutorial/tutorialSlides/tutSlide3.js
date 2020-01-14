import React from 'react';

const LastTutorial=(props)=>{
    

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
                <p1 style={{color: "grey"}}>2. Choose Floor Styles</p1>
                <br></br>
                <p1 style={{fontSize: "23px", fontWeight:"normal"}}>3. Feel Free to tell us  <p1 style={{color: "#499fb6"}}>whatever</p1>  else you want!</p1>
            </div>
            <button onClick={back}> Back </button>
        </div>
    );
}
export default LastTutorial;