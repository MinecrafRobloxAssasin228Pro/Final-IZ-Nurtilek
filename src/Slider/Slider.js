import { Images } from "./Image/ImageList";
import './Slider.css'
import { useState } from "react";
import BtnSlider from './BtnSlider'

const Slider = ()=>{
    const[sliderIndex , SetSliderIndex] = useState(1)
    const nextSlide = ()=>{
        if(sliderIndex !== Images.length){
            SetSliderIndex(sliderIndex +1)
        }else if(sliderIndex === Images.length){
            SetSliderIndex(1)
        }
    }
    const prevSlide = () =>{
        if(sliderIndex !== 1){
            SetSliderIndex(sliderIndex -1)
        }else if(sliderIndex === 1){
            SetSliderIndex(Images.length)
        }
    }
    return(
        <>
          <div className="sliderParent">
              {
                  Images.map((item , index)=>(
                      <img
                        key={item.id}
                        src={item.url}
                        className={sliderIndex === index +1 ? 'slider_img active' : 'slider_img'}
                      />
                  ))
              }
              <BtnSlider moveSlide={prevSlide} direction={'prev'} />
              <BtnSlider moveSlide={nextSlide} direction={'next'} />
          </div>
        </>
    )
}

export default Slider;