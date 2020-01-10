import React from 'react';

const Landing= ()=>{
    return(

        <div className="landing">
            
            <div className="landing__image">
                {/* <img></img> */}
            </div>
            <div className="landing__message">
                <div className= "landing__message-heading">
                    ARCHISKETCH/ON-DEMAND
                </div>
                <div className= "landing__message-subheading">
                    We turn your boring floorplan images to 3D Virtual Tours 
                </div>
                <div className= "landing__message-text">
                    We create accurate 2D, 3D models of your floorplans and furnish them according to specifications.
                    With our expertise in interior design and technological edge, we promise you accurate and powerful digital spaces
                </div>
            </div>
            <button className="landing__button">
                Click to Get Started
            </button>

        </div>
        
    );
}

export default Landing;