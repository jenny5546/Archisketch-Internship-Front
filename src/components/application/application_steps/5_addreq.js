import React, { Component } from 'react';

class AdditionalRequests extends Component{

    saveAndContinue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render(){

        return(
            <div>
                Additional Requests
                <button onClick={this.back}> Back </button>
                <button onClick={this.saveAndContinue}> Next </button>
            </div>
        )
    }
}

export default AdditionalRequests ;