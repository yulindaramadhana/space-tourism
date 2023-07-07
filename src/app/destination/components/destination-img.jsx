export const DestinationImg = ({ destinationName, imageWep, imagePng }) => {
    return (
        <picture className="w-[60%] md:w-1/2 lg:absolute md:h-full short:h-full tall:h-[80%] lg:w-fit lg:py-8">
            <source media="(min-width: 1024px)" srcSet={imagePng} />
            <source media="(min-width: 640px)" srcSet={imageWep} />
            <img
                className="w-full h-auto lg:w-auto lg:h-full"
                src={imageWep}
                alt={"image technology " + destinationName}
            />
        </picture>
    )
}
