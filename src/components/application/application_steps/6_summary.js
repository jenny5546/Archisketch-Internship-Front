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
                Summary
                <button onClick={this.back}> Back </button>
                <button onClick={this.saveAndContinue}> Confirm Payment </button>
            </div>
        )
    }
}

export default Summary ;