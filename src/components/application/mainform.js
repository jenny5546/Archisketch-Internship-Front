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
        //step 2_1
        floorType: '', //button
        //step 2_2
        commercialType: '', //button
        //step 3
        floorPlan: null, //input
        floorPlanUrl: '',
        floorNumber: '', //input
        floorSize: 0, //input
        floorSizeUnit: null, //select
        floorHeight: '', //input
        floorHeightUnit: null, //select
        floorAddress: '', //input
        //step 4
        floorSelectedTheme: [],
        floorTheme: null, //button
        floorThemeUrl:'',
        //step 5
        additionalRequest: '', //input
        //step 6
        contactInfo: '' //input with placeholder of account email
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    next2Step = () => {
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

    prev2Step = () =>{
        const { step } = this.state
        this.setState({
            step : step - 2
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleButton = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handlePlanFile = (e) => {
        if (e.target.files[0]) {
            this.setState({ floorPlan: e.target.files[0] })
            this.setState({ floorPlanUrl: URL.createObjectURL(e.target.files[0])})
        }
    }
    handleThemeFile = (e) => {
        if (e.target.files[0]) {
            this.setState({ floorTheme: e.target.files[0] })
            this.setState({ floorThemeUrl: URL.createObjectURL(e.target.files[0])})
        }
    }

    handleThemeChoices = (value) =>{
        this.setState({floorSelectedTheme : value})
    }

    render(){

        const {step} = this.state;
        const {floorType, commercialType, floorPlan, floorPlanUrl, floorNumber,floorSize, floorSizeUnit, floorHeight, floorHeightUnit, floorAddress, floorSelectedTheme, floorTheme, floorThemeUrl, additionalRequest, contactInfo} = this.state;
        const values= {floorType, commercialType, floorPlan, floorPlanUrl, floorNumber,floorSize, floorSizeUnit, floorHeight, floorHeightUnit, floorAddress, floorSelectedTheme, floorTheme, floorThemeUrl, additionalRequest, contactInfo};
        

        switch(step){
            case 1:
                return <Tutorial
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            values={values}
                        />
            case 2: 
                return <MainFloorType
                            nextStep={this.nextStep} 
                            next2Step={this.next2Step} 
                            prevStep={this.prevStep} 
                            handleButton = {this.handleButton}
                            values={values}
                        />
            case 3:
                return <SubFloorType
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            handleChange = {this.handleChange}
                            handleButton = {this.handleButton}
                            values={values}
                        />
            case 4:
                return <FloorPlan
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            prev2Step={this.prev2Step}
                            handleChange = {this.handleChange}
                            handlePlanFile = {this.handlePlanFile}
                            values={values}
                        />
            case 5: 
                return <FloorTheme
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            handleThemeChoices ={this.handleThemeChoices}
                            handleThemeFile = {this.handleThemeFile}
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