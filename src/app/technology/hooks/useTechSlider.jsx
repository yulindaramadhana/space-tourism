import { useState } from 'react'

const useTechSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function goToSlide(selectedIndex) {
        setCurrentIndex(selectedIndex)
    }

    return { goToSlide, currentIndex };
};

export default useTechSlider;
