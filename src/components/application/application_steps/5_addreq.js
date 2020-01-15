import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress4.png';

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
            <div className="application">
                <div className="application__title">
                    Application
                </div>
                <div className="application__progressbar">
                    <img className="application__progressbar-image" src={progressbar} alt="progress-bar"></img>
                </div>

                <div className="application__body">
                    <div className="addrequest">
                        <div className="addrequest__message">
                            You're Almost There!
                        </div>
                        <div className="addrequest__heading">
                            Feel Free to tell us any other requests
                        </div>
                        <div className="addrequest__formcontainer">
                            <input
                                type="text"
                                name = "additionalRequest"
                                onChange={ this.props.handleChange('additionalRequest') }
                            />
                        </div>
                    </div>
                </div>

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

export default AdditionalRequests ;