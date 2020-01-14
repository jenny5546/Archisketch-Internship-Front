import React, { Component } from 'react';
import Modal from '../modal/modal';
import './_page.scss'
import gif from '../../static/img/landing_ani.gif';
import background from '../../static/img/background_main.png';
class Page extends Component {
    
    state = {
        show: false
    };

    showModal = (e) => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        return(
            <div className="landing">
                <div className="landing__innerwrap">
                <img className="landing__background"src={background} alt="back"></img>
                    <div className="landing__image">
                        <img className="landing__image-gif"src={gif} alt="gif"></img>
                    </div>
                    <div className="landing__message">
                        <hr className="landing__message-line"/>
                        <div className= "landing__message-heading">
                            ARCHISKETCH/ON-DEMAND
                        </div>
                        <div className= "landing__message-subheading">
                            <p className= "landing__message-paragraph">We turn your boring  </p>
                            <p className= "landing__message-paragraph">floorplan images to 3D Virtual Tours</p> 
                        </div>
                        <div className= "landing__message-text">
                            We create accurate 2D, 3D models of your floorplans and furnish them according to specifications.
                            With our expertise in interior design and technological edge, we promise you accurate and powerful digital spaces.
                        </div>

                        <button className="landing__button" onClick={e => {this.showModal();}}>
                        Click to Get Started
                        </button>

                    </div>  
                    <div className="landing__modal">
                        <Modal show={this.state.show} onClose={this.showModal}/>
                    </div>
                </div>
                
            </div> 
        );
    }
    
}

export default Page;