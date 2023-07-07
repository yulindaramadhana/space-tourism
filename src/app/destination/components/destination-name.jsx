export const DestinationName = ({ name }) => {
    return (
        <div className="title
                        text-head-2-sm
                        md:text-head-2-md
                        lg:text-head-2-lg
                        short:text-[80px]
                        xl:text-head-2-lg
                        2xl:text-head-2-lg
                        font-head
                        text-baseColor-white
                        text-center
                        lg:text-start
                        xl:text-start
                        2xl:text-start">
            {name.toUpperCase()}
        </div>
    )
}