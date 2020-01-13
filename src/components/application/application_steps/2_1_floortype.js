import React, { Component } from 'react';



class MainFloorType extends Component{
    
    state = {
        hoverRes: false,
        hoverCom: false
    }
    saveAndContinue(e){
        if  (e.target.name === "residential")  this.props.skipStep();
        if  (e.target.name === "commercial") this.props.nextStep();
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
                {/* <input type='text' onChange={this.props.handleChange('floorType')}></input> */}
                <input 
                    type="button" 
                    name = "residential"
                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                    onMouseEnter={ this.toggleHoverRes } 
                    onMouseLeave= { this.toggleHoverRes } 
                    value= {this.state.hoverRes ? 'Single, Multi-Family Homes, Condominiums, Townhouses and Dormatories' : 'Residential'}
                />

                <input 
                    type="button" 
                    name = "commercial"
                    onClick={e => {this.saveAndContinue(e, "value"); this.props.handleButton(e)}} 
                    onMouseEnter={ this.toggleHoverCom } 
                    onMouseLeave= { this.toggleHoverCom } 
                    value= {this.state.hoverCom ? 'Offices, Restaurant/ Cafes, Shops, Hotels, or special purpose buildings (schools, hospitals and etc)' : 'Commercial'}
                />

            </div>
        )
    }
       
}

export default MainFloorType;