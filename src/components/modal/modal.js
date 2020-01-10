import React, { Component } from 'react';
import Application from '../application/mainform';


class Modal extends Component {

    onClose = (e) => {
        e.preventDefault();
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        
        if(!this.props.show){
            return null;
        }
        return (
            <div>
                <Application />
                <button onClick={this.onClose}>Close</button>
            </div>
        )
    }
}
export default Modal;