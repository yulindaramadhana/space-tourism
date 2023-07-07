'use client'

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { CrewImg } from './crew-img';
import { ContentTitle } from '@/components/body-content/content-title';
import { ContentSubTitle } from '@/components/body-content/content-sub-title';
import { ContentBody } from '@/components/body-content/content-body';
import useCrewSlider from '../hooks/useCrewSlider';
import { IndicatorCrewSlider } from "./indicator-crew-slider";

export const CrewSlider = ({ dataCrew }) => {
    const { nextSlide, prevSlide, goToSlide, currentIndex } = useCrewSlider(dataCrew.length);

    return (
        <div className="flex flex-col lg:flex-row h-full w-full lg:overflow-auto">
            <div className="crew-img-wrapper relative flex-1 overflow-auto flex items-center justify-center py-4 md:px-0 md:order-2 md:py-8 lg:p-0 lg:m-h-[calc(100vh-12rem)]">
                <div className='icon-crew-slider left left-0 hover:opacity-100 transition-opacity delay-100' onClick={prevSlide}>
                    <FiChevronLeft />
                </div>
                <div className='icon-crew-slider right right-0 hover:opacity-100 transition-opacity delay-100' onClick={nextSlide}>
                    <FiChevronRight />
                </div>
                <div className="w-full h-[85%] flex justify-center items-center relative">
                    <CrewImg
                        key={'img-crew-' + currentIndex}
                        crewName={dataCrew[currentIndex].name}
                        webpImage={dataCrew[currentIndex].images.webp}
                        pngImage={dataCrew[currentIndex].images.png}
                    />
                    <div className="absolute bottom-0 bg-[#383B4B] block md:hidden w-full h-[2px]"></div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-1 lg:order-1 lg:justify-around items-start">
                <div className='crew-indicators flex w-full gap-4 lg:gap-8 justify-center lg:justify-start py-0 pt-0 pb-6 md:py-8 lg:py-0 lg:pb-16 md:order-1 lg:order-2'>
                    {
                        dataCrew.map((elm, index) => {
                            return (
                                <IndicatorCrewSlider
                                    key={'indicator-slider-' + currentIndex + '' + index}
                                    currentIndex={currentIndex}
                                    index={index}
                                    goToSlide={() => { goToSlide(index) }}
                                />
                            )
                        })
                    }
                </div>
                <div className="content-info flex flex-col gap-4 pb-8 md:px-28 lg:px-0 md:py-8 flex-1 md:flex-none lg:order-1 lg:items-start w-full">
                    <div className="subtitle flex flex-col gap-2 lg:gap4">
                        <ContentSubTitle key={'crew-role'} subtitle={dataCrew[currentIndex].role} />
                        <ContentTitle key={'crew-name'} title={dataCrew[currentIndex].name} />
                    </div>
                    <ContentBody key={'crew-desc'} content={dataCrew[currentIndex].bio} />
                </div>
            </div>
        </div>
    )
}
