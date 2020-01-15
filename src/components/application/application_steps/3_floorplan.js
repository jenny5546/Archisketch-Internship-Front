import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress2.png';
import background from '../../../static/img/application/background.png';
import background2 from '../../../static/img/application/background2.png';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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

                <div className="application__title">
                    Application
                </div>
                <img className="application__bigback" src={background} alt="back"></img>
                <img className="application__miniback" src={background2} alt="back"></img>
                <div className="application__progressbar">
                    <img className="application__progressbar-image" src={progressbar} alt="progress-bar"></img>
                </div>
                
                <div className="application__body">

                    <div className="floorplan">

                        <div className="floorplan__heading">
                            Provide Information about your Floor 
                        </div>
                        
                        <div className="floorplan__formcontainer">

                            <div className="floorplan__formcontainer-file">
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
                            
                            <div className="floorplan__formcontainer-input">
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

                            <div className="floorplan__formcontainer-input">
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

                            <div className="floorplan__formcontainer-input">
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

                            <div className="floorplan__formcontainer-input">
                                <label>5. Address </label>
                                <input
                                    type="text"
                                    name = "floorAddress"
                                    onChange={ this.props.handleChange('floorAddress') }
                                />
                            </div>

                        </div>  {/* floorplan__formcontainer */}
                        
                        
                    </div> {/*floorplan*/}
                    

                </div> {/*application_body*/}
                

                <div className="application__control">
                    <div className="application__control-back">
                        <NavigateBeforeIcon fontSize="large"/>
                        <button className="application__control-back--btn" onClick={this.back}> Back </button>
                    </div> 
                    <div className="application__control-next">
                        <button className="application__control-next--btn" onClick={this.saveAndContinue}> Next </button>
                        <NavigateNextIcon fontSize="large"/>
                    </div> 
                </div>
                
            </div>
        )
    }
}

export default FloorPlan;