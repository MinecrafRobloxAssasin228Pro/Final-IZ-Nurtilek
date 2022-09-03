import './BtnSlider.css'
import { MdArrowBackIosNew , MdArrowForwardIos } from 'react-icons/md'
const BtnSlider = ({moveSlide , direction})=>{
    return(
        <>
         <button
           className={direction === 'prev' ? 'btnSlider prev' : 'btnSlider next'}
           onClick={moveSlide}
         >
           {direction === 'prev' ? (
               <MdArrowBackIosNew />
           ):(
               <MdArrowForwardIos />
           )}
         </button>
        </>
    )
};

export default BtnSlider;