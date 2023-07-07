import React from 'react'

export const ContentSubTitle = ({ subtitle }) => {
    return (
        <div className='subtitle 
                        font-head 
                        text-head-4-sm 
                        md:text-head-4-md
                        lg:text-head-4-lg
                        short:text-[28px]
                        text-baseColor-white 
                        opacity-50
                        text-center
                        lg:text-left'>{subtitle.toUpperCase()}</div>
    )
}
