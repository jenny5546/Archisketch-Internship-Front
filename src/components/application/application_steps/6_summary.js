import React, { Component } from 'react';

class Summary extends Component{

    saveAndContinue = (e) =>{ //얘는 마지막 단계니까 payment 로 이동하게 바꾸기
        e.preventDefault();
        this.props.nextStep();
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        return(
            <div>
                {/* 불러오기 */}
                floorType: {this.props.values.floorType} <br></br>
                commercialType : {this.props.values.commercialType} <br></br>
                floorPlan : <img src= {this.props.values.floorPlanUrl} alt="floorplan-summary"></img> <br></br>
                floorNumber : {this.props.values.floorNumber} <br></br>
                floorSize : {this.props.values.floorSize} {this.props.values.floorSizeUnit} <br></br>
                floorHeight : {this.props.values.floorHeight} {this.props.values.floorHeightUnit} <br></br>
                floorAddress : {this.props.values.floorAddress}   <br></br>
                floorSelectedTheme : 

                {this.props.values.floorSelectedTheme.length !== 0? 
                    this.props.values.floorSelectedTheme.map(items =>{
                        return (
                            <div><img src={items} alt="selected-style"></img></div>
                        )
                    }) :
                    <img src={this.props.values.floorThemeUrl} alt='uploaded-style'></img>
                }

                
                additionalRequest: {this.props.values.additionalRequest}  <br></br>
                contactInfo:     <br></br>    
                <button onClick={this.back}> Back </button>
                <button onClick={this.saveAndContinue}> Confirm Payment </button>
            </div>
        )
    }
}

export default Summary ;