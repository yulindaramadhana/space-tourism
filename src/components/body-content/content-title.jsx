export const ContentTitle = ({ title }) => {
    return (
        <div className='conten-title 
                        font-head 
                        text-baseColor-white 
                        text-head-3-sm
                        md:text-head-3-md
                        lg:text-head-3-lg
                        short:text-[48px]
                        text-center
                        lg:text-left'>{title.toUpperCase()}</div>
    )
}
