// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
    constructor(){
        super()
        this.state= {
            currentSlideIndex: 0
        }
    }

        render(){
            const slide = `I am on slide ${this.state.currentSlideIndex}`

            return(
                <div>{slide}</div>
            )
        }
}

export default ImageSlider