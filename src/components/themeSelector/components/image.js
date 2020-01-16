import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import check from '../../../static/img/application/check.png'

export default class Image extends Component {
  
  render() {
    const { src, isSelected, onImageClick } = this.props
    const ImageStyle = (width, height) => {
      return {
        width,
        height,
        objectFit: "cover",
        border: '1px solid white',
        opacity: `${isSelected ? '50%': '100%'}`,
      }
    }
    // const IconStyle=()=>{
    //   return {
    //     backgroundImage: "url('../../../static/img/application/check.png')",
    //     objectFit: "cover",
    //     zIndex: "99",
    //     height: "50px",
    //     width: "50px",
    //     display: `${isSelected ? 'block': 'none'}`
    //   }
    // }
    return (
      <div className={`responsive${isSelected ? " selected" : ""}`}
        onClick={onImageClick}>
        <img 
            src={src}
            className={`thumbnail${isSelected ? " selected" : ""}`}
            style={ImageStyle(180, 150)}
            alt = "select-images"
        />
        <div className="checked" style={{display: "inline-block", position: "absolute", bottom: "0", right: "0"}}>
          {/* <img src={imgCheck} alt="checkIcon" style={{ width: 75, height: 75, objectFit: "cover" }}/> */}
          <div className="icon"/>
        </div>
      </div>
    )
  }
}

Image.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool
}