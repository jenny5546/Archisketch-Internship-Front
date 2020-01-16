import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress5.png';
import background from '../../../static/img/application/background.png';
import background2 from '../../../static/img/application/background2.png';

class Summary extends Component{

    saveAndContinue = (e) =>{ //얘는 마지막 단계니까 payment 로 이동하게 바꾸기
        e.preventDefault();
        this.props.nextStep();
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    calculateCost=(type,size)=>{
        if (type==='Residential'){
            if (size <= 300) return(<p1>$99</p1>)
            if (size > 300 && size<= 600) return(<p1>$199</p1>)
            if (size > 600 && size <= 900) return(<p1>$299</p1>)
            else return(<p1>$499</p1>)
        }
        else{
            if (size <= 300) return(<p1>$199</p1>)
            if (size > 300 && size<= 600) return(<p1>$299</p1>)
            if (size > 600 && size <= 900) return(<p1>$499</p1>)
            else return(<p1>$699</p1>)
        }
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

                        <div className="summary__left">
                            <div className="summary__left__type">
                                <label className="summary__left__type-label">
                                    Floor Type : &nbsp;
                                </label>
                                <div className="summary__left__type-value">
                                    {this.props.values.floorType} 
                                    {(this.props.values.floorType) === "Commercial" ? '( ' : ''} 
                                    {(this.props.values.floorType) === "Commercial" ? (this.props.values.commercialType)  : ''} 
                                    {(this.props.values.floorType) === "Commercial" ? ' )' : ''} 
                                </div>
                                
                            </div>
    
    
                            <div className="summary__left__plan">

                                <div className="summary__left__plan-img">
                                        <img src= {this.props.values.floorPlanUrl} style={{width: "150px", height: "150px", marginTop: "20px"}} alt="floorplan-summary"></img>
                                    {/* <label className="summary__contents-label">Uploaded Floor Plan</label> */}
                                </div>

                                <div className="summary__left__plan-info">
                                    <div className="summary__left__plan-info-contents">
                                        <label className="summary__left__plan-info-contents--label">Number of Floors:&nbsp; </label>
                                        {this.props.values.floorNumber}
                                    </div>
                                    <div className="summary__left__plan-info-contents">
                                        <label className="summary__left__plan-info-contents--label">Size of Floor: &nbsp; </label>
                                        {this.props.values.floorSize} {this.props.values.floorSizeUnit}
                                    </div>
                                    <div className="summary__left__plan-info-contents">
                                        <label className="summary__left__plan-info-contents--label">Height of Floor:&nbsp; </label>
                                        {this.props.values.floorHeight} {this.props.values.floorHeightUnit}
                                    </div>
                                    <div className="summary__left__plan-info-contents">
                                        <label className="summary__left__plan-info-contents--label">Address of Floor: &nbsp;</label>
                                        {this.props.values.floorAddress}
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="summary__left__theme">
                                <label className="summary__left__theme-label">Floor Themes: &nbsp;  </label>
                                {this.props.values.floorSelectedTheme.length !== 0? 
                                this.props.values.floorSelectedTheme.map(items =>{
                                    return (
                                        <div><img src={items} alt="selected-style" style={{width: "80px", height: "50px", marginLeft: "10px"}} ></img></div>
                                    )
                                }) :
                                (<img src={this.props.values.floorThemeUrl} style={{width: "50px", height: "50px"}} alt='uploaded-style'></img>)
                            }
                            </div>
                        </div>
                        
                        <div className="summary__right">
                            <div className="summary__right__add">
                                <label className="summary__right__add-label">Additional Requests: &nbsp; </label>
                                {this.props.values.additionalRequest} 
                            </div>
                            <div className="summary__right__contact">
                                <label className="summary__right__contact-label">Contact Information: &nbsp; </label>
                                jenny5546@naver.com
                            </div>
                            <div className="summary__right__cost">
                                <label className="summary__right__cost-label">Cost Total: &nbsp; </label>
                                <div className="summary__right__cost-value">
                                    {this.calculateCost(this.props.values.floorType,this.props.values.floorSize)} 
                                    ({this.props.values.floorType}, {this.props.values.floorSize} {this.props.values.floorSizeUnit})
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                     
                </div>
                
                

                <div className="application__control">
                    <div className="application__control-back">
                        <button className="application__control-back--btn" onClick={this.back}> &lt; &nbsp; Back   </button>
                    </div> 
                    <div className="application__control-next">
                        <button className="application__control-next--btn" onClick={this.saveAndContinue}> Confirm Payment</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Summary ;