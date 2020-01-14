import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress2.png';

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
            <div className="application">
                <div className="application__progressbar">
                    <img className="application__progressbar-image" src={progressbar} alt="progress-bar"></img>
                </div>
                <div>
                    <label>1. Upload Floor Plan</label>
                    <div>
                        {this.props.values.floorPlan ? (
                            <img src={this.props.values.floorPlanUrl} alt="floorplan"></img>
                        ): (
                            <div> not uploaded yet</div>
                        )}
                    </div>
                    <input
                        type="file"
                        name = "floorPlan"
                        onChange={ this.props.handlePlanFile }
                        
                    />
                </div>
                <div>
                    <label>2. Number of floors </label>
                    <input
                        type="number"
                        defaultValue = "1"
                        name = "floorNumber"
                        onChange={ this.props.handleChange('floorNumber') }
                        value = {this.props.values.floorNumber}
                    />
                    floors
                    
                </div>
                <div>
                    <label>3. Size of floor </label>
                    <input
                        type="text"
                        name = "floorSize"
                        onChange={ this.props.handleChange('floorSize') }
                        value = {this.props.values.floorSize}
                    />
                    <select name="floorSizeUnit" onChange={this.props.handleChange('floorSizeUnit')}>
                        <option value="">Select Unit</option>
                        <option value="m^2">m^2</option>
                        <option value="ft^2">feet</option>
                    </select>
                </div>
                <div>
                    <label>4. Floor Height </label>
                    <input
                        type="text"
                        name = "floorHeight"
                        onChange={ this.props.handleChange('floorHeight') }
                        value = {this.props.values.floorHeight}
                    />
                    <select name="floorHeightUnit" onChange={this.props.handleChange('floorHeightUnit')}>
                        <option value="">Select Unit</option>
                        <option value="m">m</option>
                        <option value="ft">feet</option>
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

                <div className="application__backbtn">
                    <button onClick={this.back}> Back </button>
                </div>
                <div className="application__nextbtn">
                    <button> onClick={this.saveAndContinue}> Next </button>
                </div>
                
            </div>
        )
    }
}

export default FloorPlan;