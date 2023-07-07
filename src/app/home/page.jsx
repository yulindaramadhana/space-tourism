import { ButtonCta } from "./components/button-cta";
import { SectionWelcome } from "./components/section-welcome";

export default function Home() {
    return (
        <div
            className="home-page 
                        custom-bg-img
                        bg-home-mobile
                        md:bg-home-tablet
                        lg:bg-home-desktop
                        h-screen 
                        fixed">
            <div className="page-content-wrapper
                            flex
                            flex-1
                            px-horizontal-page-sm
                            md:px-horizontal-page-md
                            lg:px-horizontal-page-lg
                            h-content-wrapper-height-sm
                            md:h-content-wrapper-height-md
                            lg:h-content-wrapper-height-lg
                            top-gap-top-content-sm
                            md:top-gap-top-content-md
                            lg:top-gap-top-content-lg
                            py-8
                            md:pb-8
                            flex-col
                            lg:flex-row
                            justify-evenly
                            items-center">
                <SectionWelcome />
                <ButtonCta />
            </div>
        </div>
    )
};
