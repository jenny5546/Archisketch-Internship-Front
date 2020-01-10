import React, { Component } from 'react';

import Tutorial from './application_steps/1_tutorial';
import MainFloorType from './application_steps/2_1_floortype';
import SubFloorType from './application_steps/2_2_floortype';
import FloorPlan from './application_steps/3_floorplan';
import FloorTheme from './application_steps/4_floortheme';
import AdditionalRequests from './application_steps/5_addreq';
import Summary from './application_steps/6_summary';


class Application extends Component{


    state = {

        step: 1,
        floorType: '',
        commercialType: '',
        floorPlanFile: '',
        floorNumber: '',
        floorSize: '',
        floorHeight: '',
        floorAddress: '',
        floorTheme:'',
        additionalRequest: '',
        contactInfo: ''

    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    skipStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 2
        })
    }
    
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){

        const {step} = this.state;
        const {floorType, commercialType, floorPlanFile, floorNumber,floorSize,floorHeight, floorAddress, floorTheme, additionalRequest, contactInfo} = this.state;
        const values= {floorType, commercialType, floorPlanFile, floorNumber,floorSize,floorHeight, floorAddress, floorTheme, additionalRequest, contactInfo};
        

        switch(step){
            case 1:
                return <Tutorial
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 2: 
                return <MainFloorType
                        nextStep={this.nextStep} 
                        skipStep={this.skipStep} 
                        prevStep={this.prevStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 3:
                return <SubFloorType
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 4:
                return <FloorPlan
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 5: 
                return <FloorTheme
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 6: 
                return <AdditionalRequests
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 7: 
                return <Summary
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            default:
                return <Tutorial
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
        }
        
    }
        
}

export default Application;