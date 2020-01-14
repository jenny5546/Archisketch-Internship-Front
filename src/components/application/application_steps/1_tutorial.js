import React, { Component } from 'react';
import MainTutorial from '../../tutorial/maintutorial'
import '../_form.scss'

class Tutorial extends Component{
    
    
    skip = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        return(
            <div className="tutorial">
                <div className="tutorial__container">
                    <p className="tutorial__container-header">Take a look at How our </p> 
                    <p className="tutorial__container-header"> <p1 style={{fontWeight:"bold", color: "#499fb6"}}>On-Demand Service</p1> Works</p>
                    <MainTutorial/>
                </div>
                
                <button className="tutorial__skipbtn" onClick={this.skip}>
                    Skip Tutorial >
                </button>
            </div> 
        )
    }
}

export default Tutorial;