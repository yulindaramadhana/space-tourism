export const SectionWelcome = () => {
    return (
        <div className="section-welcome
                        flex
                        flex-col
                        items-center
                        gap-4
                        md:w-[60%]
                        lg:items-baseline
                        lg:w-1/2">
            <h1 className="text-head-5-sm 
                            md:text-head-5-md 
                            lg:text-head-5-lg 
                            short:text-[20px]
                            font-subhead
                            text-baseColor-light-gray">
                SO, YOU WANT TO TRAVEL TO
            </h1>
            <h2 className="text-head-1-sm 
                            md:text-head-1-md 
                            lg:text-head-1-lg 
                            short:text-[120px]
                            font-head">
                SPACE
            </h2>
            <h3 className="text-body-text-sm 
                            md:text-body-text-md 
                            lg:text-body-text-lg 
                            text-center
                            lg:text-justify
                            font-body
                            text-baseColor-light-gray">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </h3>
        </div>
    )
}