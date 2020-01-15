import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress1.png';

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
            <div className="application">

                <div className="application__title">
                    Application
                </div>

                <div className="application__progressbar">
                    <img className="application__progressbar-image" src={progressbar} alt="progress-bar"></img>
                </div>

                <div className="application__body">

                    <div className="commercialtype">
                        <div className="commercialtype__heading">
                            Please Specify the type of your Commercial Floor
                        </div>
                        <div className="commercialtype__formcontainer">

                            <div className="commercialtype__formcontainer-btn">
                                <button
                                    type="button" 
                                    name = "commercialType"
                                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                                    value= "Office"
                                >
                                    1. Office
                                </button>
                            </div>

                            <div className="commercialtype__formcontainer-btn">
                                <button
                                    type="button" 
                                    name = "commercialType"
                                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                                    value= "Restaurant/Cafe"
                                >
                                    2. Restaurant/Cafe
                                </button>
                            </div>


                            <div className="commercialtype__formcontainer-btn">
                                <button
                                    type="button" 
                                    name = "commercialType"
                                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                                    value= "Shops"
                                >
                                    3. Shops
                                </button>
                            </div>

                            <div className="commercialtype__formcontainer-btn">
                                <button
                                    type="button" 
                                    name = "commercialType"
                                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                                    value= "Hotels"
                                >
                                    4. Hotels
                                </button>
                            </div>
                            
                            <div className="commercialtype__formcontainer-input">
                                <label>5.Others</label>
                                <input
                                    type="text"
                                    placeholder = "type in the purpose of your floor"
                                    name = "commercialType"
                                    onChange={ this.props.handleChange('commercialType') }
                                />
                            </div>

                        </div> {/* commercialtype__btncontainer */}

                    </div> {/* commercialtype */}
                    
                </div>  {/* application__body */}
                
                
                <div className="application__control">
                    <div className="application__control-back">
                        <button onClick={this.back}> Back </button>
                    </div> 
                    <div className="application__control-next">
                        <button onClick={this.saveAndContinue}> Next </button>
                    </div> 
                </div>
                
            </div>
        )
    }
}

export default SubFloorType;