'use client';

import { ContentTitle } from '@/components/body-content/content-title';
import useTechSlider from '../hooks/useTechSlider'
import { ImageTech } from './image-tech';
import { IndicatorTechSlider } from './indicator-tech-slider'
import { ContentBody } from '@/components/body-content/content-body';

export const TechSlider = ({ techData }) => {
    const { goToSlide, currentIndex } = useTechSlider();

    return (
        <div className='flex flex-1 flex-col lg:flex-row lg:gap-4'>
            <div className='image-wrapper lg:flex lg:flex-1 lg:h-full lg:relative lg:justify-end lg:items-center  mx-[-1.5rem] md:mx-[-2.5rem] lg:mx-0 lg:mr-[-5rem] lg:order-2'>
                <ImageTech
                    key={'image-tech-' + currentIndex}
                    imgLandscape={techData[currentIndex].images.landscape}
                    imgPortrait={techData[currentIndex].images.portrait}
                    imgName={techData[currentIndex].name}
                />
            </div>
            <div className='flex flex-col lg:flex-row lg:flex-1 lg:items-center lg:gap-12 md:px-28 lg:px-0 md:py-8'>
                <div className='indicator-slider flex lg:flex-col gap-3 md:gap-6 md:pb-8 justify-center py-6'>
                    {
                        techData.map((elm, index) => {
                            return (
                                <IndicatorTechSlider
                                    key={'tech-slide-' + currentIndex + '' + index}
                                    currentIndex={currentIndex}
                                    index={index}
                                    goToSlide={() => goToSlide(index)}
                                />
                            )
                        })
                    }
                </div>
                <div className='content-info flex flex-col gap-4 md:py-4'>
                    <ContentTitle key={'tech-title'} title={techData[currentIndex].name} />
                    <ContentBody key={'tech-body'} content={techData[currentIndex].description} />
                </div>
            </div>
        </div>
    )
}
