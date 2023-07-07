export const DestinationTabItem = ({ index, name, activeIndex, goToTab }) => {
    return (
        <div
            onClick={goToTab}
            className={`destination-tab
                        hover:cursor-pointer
                        text-nav-body-text-sm
                        md:text-nav-body-text-md
                        lg:text-nav-text-lg
                        flex
                        justify-center
                        flex-1 
                        md:px-4
                        font-subhead `}>
            <div className={`py-4 w-fit 
                            hover:border-b-baseColor-white
                            hover:border-b-[3px] 
                            hover:opacity-50
                            transition-all delay-300 ease-in ${(activeIndex === index ? ' border-b-baseColor-white border-b-[3px]' : '')}`}>
                {name.toUpperCase()}
            </div>
        </div>
    )
}
