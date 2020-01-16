import React, { Component } from 'react'

import ImagePicker from './components/image-picker'

import img1 from '../../static/img/floor_themes/residential/ex1.jpg';
import img2 from '../../static/img/floor_themes/residential/ex2.jpg';
import img3 from '../../static/img/floor_themes/residential/ex3.jpg';
import img4 from '../../static/img/floor_themes/residential/ex4.jpg';
import img5 from '../../static/img/floor_themes/residential/ex5.jpg';
import img6 from '../../static/img/floor_themes/residential/ex6.jpg';
import img7 from '../../static/img/floor_themes/residential/ex7.jpg';
import img8 from '../../static/img/floor_themes/residential/ex8.jpg';
import img9 from '../../static/img/floor_themes/residential/ex9.jpg';
import img10 from '../../static/img/floor_themes/residential/ex10.jpg';
import img11 from '../../static/img/floor_themes/residential/ex11.jpg';
import img12 from '../../static/img/floor_themes/residential/ex12.jpg';

const imageList = [img1, img2, img3, img4, img5, img6,img7, img8, img9, img10, img11, img12]

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
          <div style={{position: "absolute", top: "12%", right: "1%", fontSize: "12px"}}>Select a <p1 style={{fontWeight: "bolder", color: "#5894a3"}}>maximum of three </p1>items</div>
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