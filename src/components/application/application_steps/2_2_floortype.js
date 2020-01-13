import React, { Component } from 'react';

class SubFloorType extends Component{
    
    saveAndContinue = (e) =>{
        e.preventDefault()
        this.props.nextStep()
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        return(
            <div>
                Floor Type Commercial
                <button
                    type="button" 
                    name = "commercialType"
                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                    value= "Office"
                >
                    1. Office
                </button>
                <button
                    type="button" 
                    name = "commercialType"
                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                    value= "Restaurant/Cafe"
                >
                    2. Restaurant/Cafe
                </button>
                <button
                    type="button" 
                    name = "commercialType"
                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                    value= "Shops"
                >
                    3. Shops
                </button>
                <button
                    type="button" 
                    name = "commercialType"
                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                    value= "Hotels"
                >
                    4. Hotels
                </button>
                
                <div>
                    <label>5.Others</label>
                    <input
                        type="text"
                        placeholder = "type in the purpose of your floor"
                        name = "commercialType"
                        onChange={ this.props.handleChange('commercialType') }
                    />
                    <button onClick={this.saveAndContinue}> Next </button>
                </div>
                

                <button onClick={this.back}> Back </button>
                
            </div>
        )
    }
}

export default SubFloorType;