import React, { Component } from 'react';


class FloorPlan extends Component{



    saveAndContinue = (e) =>{
        e.preventDefault()
        this.props.nextStep()
        console.log(this.props.values.floorHeightUnit)
        
    }
    back  = (e) => {
        e.preventDefault();
        (this.props.values.floorType) === "Residential" ? this.props.prev2Step(): this.props.prevStep();
    }

    render(){
        return(
            <div>
                <div>

                    {/* https://basketdeveloper.tistory.com/55 백 파고 연동하기 */}

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
                        onChange={ this.props.handleFile }
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
                    floors
                    
                </div>
                <div>
                    <label>3. Size of floor </label>
                    <input
                        type="text"
                        name = "floorSize"
                        onChange={ this.props.handleChange('floorSize') }
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

                <button onClick={this.back}> Back </button>
                <button onClick={this.saveAndContinue}> Next </button>
            </div>
        )
    }
}

export default FloorPlan;