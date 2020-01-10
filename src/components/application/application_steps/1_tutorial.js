import React, { Component } from 'react';

class Tutorial extends Component{

    skip = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        return(
            <div>
                Tutorial
                <button onClick={this.skip}>
                    Skip
                </button>
            </div> 
        )
    }
}

export default Tutorial;