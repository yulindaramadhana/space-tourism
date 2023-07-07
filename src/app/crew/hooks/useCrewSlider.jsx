import { useState } from "react";
import BodyContentNavigator from "@/utils/body.content.navigator";

const useCrewSlider = (totalData) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    function nextSlide() {
        const newIndex = BodyContentNavigator.goToNext({ dataLength: totalData, currentIndex: currentIndex });
        setCurrentIndex(newIndex);
    }

    function prevSlide() {
        const newIndex = BodyContentNavigator.goToPrev({ dataLength: totalData, currentIndex: currentIndex });
        setCurrentIndex(newIndex);
    }

    function goToSlide(selectedIndex) {
        setCurrentIndex(selectedIndex)
    }

    return { nextSlide, prevSlide, goToSlide, currentIndex };
};

export default useCrewSlider;