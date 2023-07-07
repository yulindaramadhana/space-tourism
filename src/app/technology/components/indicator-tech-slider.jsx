export const IndicatorTechSlider = ({ currentIndex, index, goToSlide }) => {
    return (
        <div
            className={'tech-indicator hover:cursor-pointer border-opacity-25 hover:border-opacity-100 transition-all delay-200 ease-in-out font-head text-head-4-sm md:text-head-4-md lg:text-head-4-lg w-10 h-10 md:w-16 md:h-16 bg-transparent' + (currentIndex === index ? ' active' : '')}
            onClick={goToSlide}
        >
            {index + 1}
        </div>
    )
}
