import { BsFillCircleFill } from "react-icons/bs";

export const IndicatorCrewSlider = ({ currentIndex, index, goToSlide }) => {
    return (
        <div
            key={"indicator-crew-" + index}
            className='indicator hover:cursor-pointer'
            onClick={goToSlide}>
            <BsFillCircleFill className={'circle-crew-indicator w-[10px] md:w-4 ' + (currentIndex === index ? 'active' : '')} />
        </div>
    )
}
