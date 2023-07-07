import React from 'react'

export const DestinationDistanceTravel = ({ title, value }) => {
    return (
        <div className="flex
                        flex-col
                        items-center
                        gap-[12px]
                        pt-8">
            <div className="text-baseColor-light-gray
                            font-subhead
                            text-subhead-2">{title}</div>
            <div className="text-baseColor-white
                            font-head
                            text-subhead-1">{value.toUpperCase()}</div>
        </div>
    )
}
