import { useRef, useState } from "react";

const useDestinationTab = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    function goToTab(selectedIndex) {
        setActiveIndex(selectedIndex)
    }

    return { goToTab, activeIndex };
};
export default useDestinationTab;