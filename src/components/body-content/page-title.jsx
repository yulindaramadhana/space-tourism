export default function PageTitle({ id, title }) {
    return (
        <div className="section-title
                        flex
                        gap-[18px]
                        font-subhead
                        text-head-5-sm
                        md:text-head-5-md
                        lg:text-head-5-lg
                        short:text-[20px]
                        xl:text-head-5-xl
                        justify-center
                        md:justify-start
                        py-2
                        md:py-8
                        lg:py-4">
            <div className="font-bold
                            opacity-25">{id}</div>
            <div>{title}</div>
        </div>
    )
};