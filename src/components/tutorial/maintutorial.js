import React, { useState } from 'react';
import FirstTutorial from './tutorialSlides/tutSlide1';
import SecondTutorial from './tutorialSlides/tutSlide2';
import LastTutorial from './tutorialSlides/tutSlide3';
import '../application/_form.scss'

const MainTutorial=()=>{
    
    const [step, setStep] = useState(1);

    const nextStep=()=>{
        setStep(step+1);
    }
    const prevStep=()=>{
        setStep(step-1);
    }
    return(
        
        <div>
            {(function() {
                switch(step) {
                case 1:
                    return <FirstTutorial nextStep= {nextStep}/>;
                case 2:
                    return <SecondTutorial nextStep= {nextStep} prevStep={prevStep}/>;
                case 3:
                    return <LastTutorial nextStep= {nextStep} prevStep={prevStep}/>;
                default:
                    return <FirstTutorial nextStep= {nextStep}/>;
                }
            })()}
        </div>
    );
    
    
}
export default MainTutorial;