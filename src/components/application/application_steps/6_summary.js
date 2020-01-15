import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress5.png';
import background from '../../../static/img/application/background.png';
import background2 from '../../../static/img/application/background2.png';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
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
            <div className="application">

                <div className="application__title">
                    Summary
                </div>
                <img className="application__bigback" src={background} alt="back"></img>
                <img className="application__miniback" src={background2} alt="back"></img>
                <div className="application__progressbar">
                    <img className="application__progressbar-image" src={progressbar} alt="progress-bar"></img>
                </div>

                <div className="application__body">

                    <div className="summary">
                        {/* 불러오기 */}
                        <div className="summary__contents">
                            <label>floorType: </label>
                            {this.props.values.floorType} 
                        </div>
                        
                        <div className="summary__contents">
                            <label>commercialType: </label>
                            {this.props.values.commercialType}
                        </div>

                        <div className="summary__contents">
                            <label>floorPlan: </label>
                            <img src= {this.props.values.floorPlanUrl} alt="floorplan-summary"></img>
                        </div>
                        <div className="summary__contents">
                            <label>floorNumber: </label>
                            {this.props.values.floorNumber}
                        </div>
                        <div className="summary__contents">
                            <label>floorSize:  </label>
                            {this.props.values.floorSize} {this.props.values.floorSizeUnit}
                        </div>
                        <div className="summary__contents">
                            <label>floorHeight: </label>
                            {this.props.values.floorHeight} {this.props.values.floorHeightUnit}
                        </div>
                        <div className="summary__contents">
                            <label>floorAddress: </label>
                            {this.props.values.floorAddress}
                        </div>
                        <div className="summary__contents">
                            <label>floorSelectedTheme : </label>
                            {this.props.values.floorSelectedTheme.length !== 0? 
                            this.props.values.floorSelectedTheme.map(items =>{
                                return (
                                    <div><img src={items} alt="selected-style"></img></div>
                                )
                            }) :
                            (<img src={this.props.values.floorThemeUrl} alt='uploaded-style'></img>)
                        }
                        </div>
        
                        <div className="summary__contents">
                            <label>additionalRequest: </label>
                            {this.props.values.additionalRequest} 
                        </div>
                        <div className="summary__contents">
                            <label>contactInfo: </label>
                            jenny5546@naver.com
                        </div>
                    </div>
                     
                </div>
                
                

                <div className="application__control">
                    <div className="application__control-back">
                        <NavigateBeforeIcon fontSize="large"/>
                        <button className="application__control-back--btn" onClick={this.back}> Edit Application </button>
                    </div> 
                    <div className="application__control-next">
                        <button className="application__control-next--btn" onClick={this.saveAndContinue}> Confirm Payment</button>
                        <NavigateNextIcon fontSize="large"/>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Summary ;