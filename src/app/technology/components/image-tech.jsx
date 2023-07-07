export const ImageTech = ({ imgPortrait, imgLandscape, imgName }) => {
    return (
        <picture className="lg:absolute h-[80%]">
            <source media="(min-width: 1024px)" srcSet={imgPortrait} />
            <source media="(min-width: 640px)" srcSet={imgLandscape} />
            <img
                className="w-full h-auto lg:w-auto lg:h-full"
                src={imgLandscape}
                alt={"image technology " + imgName}
            />
        </picture>
    )
}
