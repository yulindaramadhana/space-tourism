'use client';

import useDestinationTab from "../hooks/useDestinationTab";
import { DestinationInfo } from "./destination-info";
import { DestinationDistanceTravel } from "./destination-distance-travel";
import { DestinationImg } from "./destination-img";
import { DestinationName } from "./destination-name";
import { DestinationTabItem } from "./destination-tab-item";
import { LineSeparator } from "./line-separator";

export default function DestinationTabs({ destinationData }) {
    const { goToTab, activeIndex } = useDestinationTab();

    return (
        <div className="flex flex-1 flex-col lg:flex-row lg:gap-10">
            <div className="img-wrapper flex justify-center items-center py-4 md:pb-8 md:pt-0 lg:relative lg:h-full lg:max-h-full lg:flex-1 ">
                <DestinationImg
                    key={'destination-image-' + activeIndex}
                    imageWep={destinationData[activeIndex].images.webp}
                    imagePng={destinationData[activeIndex].images.png}
                    destinationName={destinationData[activeIndex].name}
                />
            </div>
            <div className="content-info lg:flex-1 lg:relative lg:overflow-auto md:px-20 lg:px-0">
                <div className="flex flex-col justify-center items-center lg:items-start lg:h-full lg:absolute lg:px-4 short:justify-start tall:justify-center lg:top-0 bottom-0 right-0 left-0">
                    <div className="tab-list w-full md:w-fit py-3 md:py-6 flex items-center justify-center">
                        {
                            destinationData.map((item, index) => {
                                return (
                                    <DestinationTabItem
                                        key={'destination-tab-item-' + index}
                                        activeIndex={activeIndex}
                                        index={index}
                                        name={item.name}
                                        goToTab={() => goToTab(index)}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center lg:items-start">
                        <DestinationName key={'destination-title-' + activeIndex} index={activeIndex} name={destinationData[activeIndex].name} />
                        <DestinationInfo key={'destination-desc-' + activeIndex} description={destinationData[activeIndex].description} />
                    </div>
                    <LineSeparator />
                    <div className='flex 
                                    flex-col 
                                    md:flex-row 
                                    md:w-full 
                                    md:justify-around
                                    lg:justify-start
                                    xl:justify-start
                                    2xl:justify-start
                                    lg:gap-24
                                    2xl:gap-40
                                    xl:gap-40'>
                        <DestinationDistanceTravel
                            key={"destination-desc-distance-" + activeIndex}
                            title={"AVG. DISTANCE"}
                            value={destinationData[activeIndex].distance} />
                        <DestinationDistanceTravel
                            key={"destination-desc-travel-" + activeIndex}
                            title={"EST TIME TRAVEL"}
                            value={destinationData[activeIndex].travel} />
                    </div>
                </div>
            </div>
        </div>
    )
}
