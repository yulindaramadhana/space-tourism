import getLocalData from "../api/staticdata";
import DestinationTabs from "./components/destination-tabs";
import PageTitle from "@/components/body-content/page-title";

export default async function Destination() {
    const localData = await getLocalData();

    return (
        <div className={`custom-bg-img destination-page
                        bg-destination-mobile 
                        md:bg-destination-tablet 
                        lg:bg-destination-desktop
                        xl:bg-destination-desktop
                        2xl:bg-destination-desktop
                        items-baseline
                        h-screen 
                        fixed  `}>
            <div className="page-content-wrapper
                            flex
                            flex-1
                            flex-col
                            px-horizontal-page-sm
                            md:px-horizontal-page-md
                            lg:px-horizontal-page-lg
                            md:top-gap-top-content-md
                            lg:top-gap-top-content-lg
                            h-content-wrapper-height-sm
                            md:h-content-wrapper-height-md
                            lg:h-content-wrapper-height-lg
                            md:pb-8
                            overflow-hidden
                            ">
                <PageTitle
                    key={'destination-page-title'}
                    id={'01'}
                    title={'PICK YOUR DESTINATION'} />
                <DestinationTabs destinationData={localData.destinations} />
            </div>
        </div>
    )
};