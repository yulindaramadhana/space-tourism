import React from 'react'

export const ContentBody = ({ content }) => {
    return (
        <div className='body-content 
                        text-baseColor-light-gray 
                        font-body 
                        text-body-text-sm
                        md:text-body-text-md
                        lg:text-body-text-lg
                        text-center
                        lg:text-left'>{content}</div>
    )
}
