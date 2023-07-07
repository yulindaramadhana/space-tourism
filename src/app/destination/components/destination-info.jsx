import React from 'react'

export const DestinationInfo = ({ description }) => {
    return (
        <div className="description 
                    text-body-text-sm
                    md:text-body-text-md
                    lg:text-body-text-lg
                    xl:text-body-text-lg
                    2xl:text-body-text-lg
                    font-body
                    text-baseColor-light-gray
                    text-center
                    lg:text-start
                    xl:text-start
                    2xl:text-start">
            {description}
        </div>
    )
}
