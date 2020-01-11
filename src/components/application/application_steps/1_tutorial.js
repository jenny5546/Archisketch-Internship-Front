import React, { Component } from 'react';
import MainTutorial from '../../tutorial/maintutorial'

class Tutorial extends Component{

    skip = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        return(
            <div>
                <MainTutorial/>
                <button onClick={this.skip}>
                    Skip
                </button>
            </div> 
        )
    }
}

export default Tutorial;