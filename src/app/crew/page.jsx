import getLocalData from '@/app/api/staticdata';
import PageTitle from "@/components/body-content/page-title";
import { CrewSlider } from './components/crew-slider';

export default async function Crew() {
    const localData = await getLocalData();

    return (
        <div
            className={`custom-bg-img crew-page
                            bg-crew-mobile 
                            md:bg-crew-tablet 
                            lg:bg-crew-desktop
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
                <PageTitle title={"MEET YOUR CREW"} id={"02"} key={'page-crew-title'} />
                <CrewSlider dataCrew={localData.crew} />
            </div>
        </div>
    )
}