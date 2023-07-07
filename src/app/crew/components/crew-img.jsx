export const CrewImg = ({ webpImage, pngImage, crewName }) => {
    return (
        <picture className="max-w-[calc(100%-2rem)] md:max-w-full md:max-h-full w-auto h-full">
            <source media="(min-width: 1024px)" srcSet={pngImage} />
            <source media="(min-width: 640px)" srcSet={webpImage} />
            <img
                className="w-auto h-full"
                src={webpImage}
                alt={"image crew " + crewName} />
        </picture>
    )
}
