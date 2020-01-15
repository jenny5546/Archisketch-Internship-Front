import React, { Component } from 'react';
import ThemeSelector from '../../themeSelector/themeSelector'
import progressbar from '../../../static/img/application/progress3.png';
import background from '../../../static/img/application/background.png';
import background2 from '../../../static/img/application/background2.png';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class FloorTheme extends Component{

    pickedThemes =(value) =>{
        let srclist = []
        for (var i=0; i<value.length; i++) {srclist.push(value[i].src)}
        this.props.handleThemeChoices(srclist);
        console.log(srclist)

    }

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
                <img className="application__bigback" src={background} alt="back"></img>
                <img className="application__miniback" src={background2} alt="back"></img>
                <div className="application__progressbar">
                    <img className="application__progressbar-image" src={progressbar} alt="progress-bar"></img>
                </div>

                <div className="application__body">

                    <div className="floortheme">
                        <div className="floortheme__heading">
                            Floor Theme
                        </div>

                        <div className="floortheme__imagepicker">
                            <ThemeSelector pickedThemes={this.pickedThemes}/>
                        </div>

                        <div className="floortheme__imageuploader">
                            
                            <div className="floortheme__imageuploader-heading">
                                Or Upload your Own Style
                            </div>
                            <div className="floortheme__imageuploader-wrap">

                                <div>
                                        {this.props.values.floorTheme ? (
                                            <img src={this.props.values.floorThemeUrl} alt="floortheme"></img>
                                        ): (
                                            <div> not uploaded yet</div>
                                        )}
                                </div>
                                <input
                                        type="file"
                                        name = "floorTheme"
                                        onChange={ this.props.handleThemeFile }
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                

                <div className="application__control">
                    <div className="application__control-back">
                        <NavigateBeforeIcon fontSize="large"/>
                        <button className="application__control-back--btn" onClick={this.back}> Back </button>
                    </div> 
                    <div className="application__control-next">
                        <button className="application__control-next--btn" onClick={this.saveAndContinue}> Next </button>
                        <NavigateNextIcon fontSize="large"/>
                    </div> 
                </div>

            </div>
        )
    }
}

export default FloorTheme;