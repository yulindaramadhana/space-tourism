import Link from "next/link";

export const NavMenuItem = ({ name, path, index, currentPath }) => {
    return (
        <Link id={"nav-item-" + index}
            className={`nav-item
                        flex
                        gap-3
                        font-subhead
                        text-nav-text-sm
                        md:text-nav-text-md
                        md:h-full
                        lg:h-full
                        px-4
                        py-3
                        md:py-0
                        lg:py-0
                        md:items-center
                        lg:items-center 
                        border-b-[3px]
                        ${currentPath === path ? ' border-b-baseColor-white' : ' border-transparent'} 
                        hover:border-b-baseColor-white 
                        hover:opacity-50
                        transition-all delay-300 ease-in`}
            href={path}>
            <div className="font-bold 
                            block 
                            md:hidden 
                            lg:block 
                            xl:block 
                            2xl:block">
                {"0" + index}
            </div>
            <div>{name.toUpperCase()}</div>
        </Link>
    )
}