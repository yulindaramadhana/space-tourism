import { Logo } from "./elements/logo"
import { NavMenu } from "./elements/nav-menu"

export const Navbar = () => {
    return (
        <nav className="z-10
                        sticky
                        top-0
                        right-0
                        left-0
                        h-nav-height-sm
                        md:h-nav-height-md
                        lg:h-nav-height-lg">
            <div className="flex
                            justify-between
                            items-center
                            h-full
                            lg:top-10
                            px-8
                            md:px-10
                            lg:px-14
                            lg:pt-10">
                <Logo />
                <NavMenu />
            </div>
        </nav>
    )
}