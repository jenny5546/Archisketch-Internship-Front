import React, { Component } from 'react';



class MainFloorType extends Component{
    
    
    saveAndContinue(e){
        if  (e.target.value === "Residential")  this.props.skipStep();
        if  (e.target.value === "Commercial") this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }


    render(){

        return(
            <div>
                Residential/Commercial
                <button onClick={this.back}> Back </button>
                {/* <input type='text' onChange={this.props.handleChange('floorType')}></input> */}
                <input type="button" onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} value="Residential"/>
                <input type="button" onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} value="Commercial"/>
            </div>
        )
    }
       
}

export default MainFloorType;