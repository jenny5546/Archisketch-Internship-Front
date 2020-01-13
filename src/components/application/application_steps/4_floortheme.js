import React, { Component } from 'react';
import ThemeSelector from '../../themeSelector/themeSelector'

class FloorTheme extends Component{

    pickedThemes =(value) =>{
        this.props.handleThemeChoices(value);
        // console.log(value);
        console.log(this.props.values.floorSelectedTheme.length)
        console.log(this.props.values.floorSelectedTheme);

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
            <div>
                Floor Theme
                <ThemeSelector pickedThemes={this.pickedThemes}/>

                <div>
                    Or Upload your Own Style
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
                
                <button onClick={this.back}> Back </button>
                <button onClick={this.saveAndContinue}> Next </button>
            </div>
        )
    }
}

export default FloorTheme;