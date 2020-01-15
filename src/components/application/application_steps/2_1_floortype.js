import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress1.png';


class MainFloorType extends Component{
    
    state = {
        hoverRes: false,
        hoverCom: false
    }
    saveAndContinue(e){
        if  (e.target.value === "Residential")  this.props.next2Step();
        if  (e.target.value === "Commercial") this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    toggleHoverRes=()=>{
        this.setState({
            hoverRes: !this.state.hoverRes
        })
        
    }
    toggleHoverCom=()=>{
        this.setState({
            hoverCom: !this.state.hoverCom
        })  
    }
    render(){
        return( 

            //구조 : application >> application__title, application__progressbar, application__body, application__control ( >> 이 안에 각각의 application )
            <div className="application">

                <div className="application__title">
                    Application
                </div>

                <div className="application__progressbar">
                        <img className="application__progressbar-image" src={progressbar} alt="progress-bar"></img>
                </div>

                <div className="application__body">

                    <div className= "floortype">

                        <div className="floortype__heading">
                            1. Tell us the purpose of your floor
                        </div>

                        <div className="floortype__btncontainer">
                            <div>
                                <button
                                    type="button" 
                                    className="floortype__btn"
                                    name = "floorType"
                                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                                    onMouseEnter={ this.toggleHoverRes } 
                                    onMouseLeave= { this.toggleHoverRes } 
                                    value= "Residential"
                                >
                                    {this.state.hoverRes ? 'Single, Multi-Family Homes, Condominiums, Townhouses and Dormatories' : 'Residential'}
                                </button> 
                            </div>
                            <div>
                                <button
                                    type="button" 
                                    className="floortype__btn"
                                    name = "floorType"
                                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                                    onMouseEnter={ this.toggleHoverCom } 
                                    onMouseLeave= { this.toggleHoverCom } 
                                    value= "Commercial"
                                >
                                    {this.state.hoverCom ? 'Offices, Restaurant/ Cafes, Shops, Hotels, or special purpose buildings (schools, hospitals and etc)' : 'Commercial'}
                                </button>
                            </div>     
                        </div>
                    </div>
                    
                </div>

                <div className="application__control">
                    <div className="application__control-back">
                        <button onClick={this.back}> Back </button>
                    </div> 
                </div>
                

                

            </div>
        )
    }
       
}

export default MainFloorType;