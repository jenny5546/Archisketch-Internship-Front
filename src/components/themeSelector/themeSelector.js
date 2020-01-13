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
        image: null,
        images: []
      }
    }
  
    onPickImage(image) {
      this.setState({image})
    }
  
    onPickImages(images) {
      this.setState({images})
    }
  
    render() {
      return (
        <div>
          <h1>Theme Picker</h1>
          <h3>Multiple Select</h3>
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
// class PickedImage {
//     constructor (imageSrc, themeType) {
//         this.imageSrc = imageSrc;
//         this.themeType = themeType;
//     }
// }
// const ThemeSelector =() =>{

//     const [pickList, setPickList] = useState([]);

//     const handlePick=(e)=>{
//         const newPick = new PickedImage(e.target.value, e.target.name)
//         setPickList({...pickList, newPick});
//     }

//     return(
//         <div>
//             <select name="floorTheme">

//             </select>
//             {
//                 imgList.map(img => {
//                     return (
//                         <option><img src={img} alt="theme-images"></img></option>
//                     )
//                 })
//             }
//         </div>
//     )
// }

export default ThemeSelector;