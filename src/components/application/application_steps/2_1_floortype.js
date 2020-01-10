import React, { Component } from 'react';

class MainFloorType extends Component{

    state = {
        type: ''
    }

    saveAndContinue = () => {
        console.log(this.state)
        if  (this.state === "Residential")  this.props.skipStep();
        if  (this.state === "Commercial") this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    _handleClick =(val) =>{
        this.setState(val);
        console.log(val);
    }

    render(){

        return(
            <div>
                Residential/Commercial
                <button onClick={this.back}> Back </button>
                <button onClick={this._handleClick(this.value)} value="Residential"> Residential </button>
                <button onClick={this._handleClick(this.value)} value="Commercial"> Commercial </button>
            </div>
        )
    }
       
}

export default MainFloorType;