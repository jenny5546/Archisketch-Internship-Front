import React, { Component } from 'react';
import ThemeSelector from '../../themeSelector/themeSelector'

class FloorTheme extends Component{

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
                <ThemeSelector/>
                <button onClick={this.back}> Back </button>
                <button onClick={this.saveAndContinue}> Next </button>
            </div>
        )
    }
}

export default FloorTheme;