import PageTitle from "@/components/body-content/page-title";

export default async function About() {
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
                <PageTitle title={"CONNECT WITH US"} id={"04"} key={'page-about-title'} />
                <div className="flex flex-col gap-y-2 items-start">
                    <input type="text" id="input-subcribe" placeholder="email" className="text-baseColor-black p-4 rounded-sm" />
                    <button id="btn-subscribe" className="p-4 py-2 bg-baseColor-black uppercase rounded-sm hover:bg-baseColor-black/80">Subscribe</button>
                </div>
            </div>
        </div>
    )
}