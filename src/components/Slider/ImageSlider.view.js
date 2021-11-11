import React, { useState } from 'react'
import { ImageSliderData } from './ImageSlider.data'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    return (
        <>
            {ImageSliderData.map((slide,index)=>{
                return <img src={slide.Image} alt='motorcycle'/>
            })}
        </>
    ) 
}

export default ImageSlider
