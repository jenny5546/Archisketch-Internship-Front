import React, { Component } from 'react';
import Application from '../application/mainform';
import './_modal.scss'
import IconButton from '@material-ui/core/IconButton'
import CancelIcon from '@material-ui/icons/Cancel';

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
            <div className="modal">
                <IconButton className="modal__closebtn" onClick={this.onClose}>
                    <CancelIcon/>
                </IconButton>
                <Application />
                
                
            </div>
        )
    }
}
export default Modal;