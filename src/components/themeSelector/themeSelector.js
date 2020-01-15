import React, { Component } from 'react'

import ImagePicker from './components/image-picker'

import img1 from '../../static/img/floor_themes/residential/ex1.jpg';
import img2 from '../../static/img/floor_themes/residential/ex2.jpg';
import img3 from '../../static/img/floor_themes/residential/ex3.jpg';
import img4 from '../../static/img/floor_themes/residential/ex4.jpg';
import img5 from '../../static/img/floor_themes/residential/ex5.jpg';
import img6 from '../../static/img/floor_themes/residential/ex6.jpg';

const imageList = [img1, img2, img3, img4, img5, img6]

class ThemeSelector extends Component {

    constructor(props) {
      super(props)
      this.state = {
        images: []
      }
    }
    
   
    onPickImages(images) {
        this.setState({images},()=>{
          this.props.pickedThemes(this.state.images)
          console.log(images)
        })
        
    }
    
    render() {
      return (
        <div>
          <h3>Select a maximum of three items</h3>
          <ImagePicker 
            images={imageList.map((image, i) => ({src: image, value: i}))}
            onPick={this.onPickImages.bind(this)}
            multiple
          />
          {/* <textarea rows="4" cols="100" value={JSON.stringify(this.state.images)}/> */}
        </div>
      )
    }
}


export default ThemeSelector;