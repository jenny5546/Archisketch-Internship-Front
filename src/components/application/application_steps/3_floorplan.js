import React, { Component } from 'react';


class FloorPlan extends Component{

    saveAndContinue = (e) =>{
        e.preventDefault()
        this.props.nextStep()
        
    }
    back  = (e) => {
        e.preventDefault();
        (this.props.values.floorType) === "Residential" ? this.props.prev2Step(): this.props.prevStep();
    }

    render(){
        return(
            <div>
                <div>
                    <label>1. Upload Floor Plan</label>
                    <input
                        type="file"
                        name = "floorPlanFile"
                        onChange={ this.props.handleChange('floorPlanFile') }
                    />
                </div>
                <div>
                    <label>2. Number of floors </label>
                    <input
                        type="number"
                        defaultValue = "1"
                        name = "floorNumber"
                        onChange={ this.props.handleChange('floorNumber') }
                    />
                </div>
                <div>
                    <label>3. Size of floor </label>
                    <input
                        type="text"
                        name = "floorSize"
                        onChange={ this.props.handleChange('floorSize') }
                    />
                    <select name="floorSizeUnit">
                        <option value="meters">m^2</option>
                        <option value="feet">feet</option>
                    </select>
                </div>
                <div>
                    <label>4. Floor Height </label>
                    <input
                        type="text"
                        name = "floorHeight"
                        onChange={ this.props.handleChange('floorHeight') }
                    />
                    <select name="floorHeightUnit">
                        <option value="meters">m</option>
                        <option value="feet">feet</option>
                    </select>
                </div>
                <div>
                    <label>5. Address </label>
                    <input
                        type="text"
                        name = "floorAddress"
                        onChange={ this.props.handleChange('floorAddress') }
                    />
                </div>
                


                <button onClick={this.back}> Back </button>
                <button onClick={this.saveAndContinue}> Next </button>
            </div>
        )
    }
}

export default FloorPlan;