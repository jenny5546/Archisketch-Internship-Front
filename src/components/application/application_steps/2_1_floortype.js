import React, { Component } from 'react';



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
            <div>
                1. Floor Type
                <button onClick={this.back}> Back </button>
                
                <button
                    type="button" 
                    name = "floorType"
                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                    onMouseEnter={ this.toggleHoverRes } 
                    onMouseLeave= { this.toggleHoverRes } 
                    value= "Residential"
                >
                    {this.state.hoverRes ? 'Single, Multi-Family Homes, Condominiums, Townhouses and Dormatories' : 'Residential'}
                </button>

                <button
                    type="button" 
                    name = "floorType"
                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                    onMouseEnter={ this.toggleHoverCom } 
                    onMouseLeave= { this.toggleHoverCom } 
                    value= "Commercial"
                >
                    {this.state.hoverCom ? 'Offices, Restaurant/ Cafes, Shops, Hotels, or special purpose buildings (schools, hospitals and etc)' : 'Commercial'}
                </button>

            </div>
        )
    }
       
}

export default MainFloorType;