import PageTitle from "@/components/body-content/page-title";
import { TechSlider } from "./components/tech-slider";
import getLocalData from "../api/staticdata";

export default async function Technology() {
    const localData = await getLocalData();

    return (
        <div
            className={`custom-bg-img 
                            tech-page
                            bg-tech-mobile 
                            md:bg-tech-tablet 
                            lg:bg-tech-desktop
                            items-baseline
                            h-screen 
                            fixed `}
        >
            <div className="flex 
                            flex-col 
                            h-content-wrapper-height-sm
                            md:h-content-wrapper-height-md
                            fixed
                            top-gap-top-content-sm
                            md:top-gap-top-content-md
                            lg:top-gap-top-content-lg
                            px-horizontal-page-sm
                            md:px-horizontal-page-md
                            lg:px-horizontal-page-lg
                            overflow-auto">
                <PageTitle title={"SPACE LAUNCH 101"} id={"03"} key={'page-technology-title'} />
                <TechSlider key={'technology-slider'} techData={localData.technology} />
            </div>
        </div>
    )
}