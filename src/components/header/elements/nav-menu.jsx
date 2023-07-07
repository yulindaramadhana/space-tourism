'use client'

import { HamburgerButton } from "./button-hamburger";
import { NavMenuItem } from "./nav-menu-item";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LineSeparator } from "./line-separator";

const NAVLIST = [{ name: "Home", path: "/" },
{ name: "Destination", path: "/destination" },
{ name: "Crew", path: "/crew" },
{ name: "Technology", path: "/technology" }];

export const NavMenu = () => {
    const pathname = usePathname();
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div>
            <HamburgerButton
                openDrawer={openDrawer}
                funcOpenDrawer={() => setOpenDrawer(!openDrawer)}
            />
            <div className={`bg-[#ffffff14] 
                            backdrop-blur-lg 
                            top-0
                            z-10 
                            fixed
                            h-screen
                            md:h-20
                            lg:mt-10
                            duration-500
                            ease-linear
                            ${openDrawer ? 'right-0' : 'right-[-100%]'}
                            md:right-0`}>
                <ul className="relative pt-28 md:pt-0 h-full">
                    {
                        NAVLIST.map((item, index) => {
                            return (
                                <li key={'list-nav-' + index}
                                    className={`px-6 lg:px-10 py-2 md:py-0 md:inline-block md:h-full `}>
                                    <NavMenuItem
                                        key={'nav-' + item.name}
                                        name={item.name}
                                        path={item.path}
                                        index={index}
                                        currentPath={pathname}
                                    />
                                </li>
                            )
                        })
                    }
                    <LineSeparator />
                </ul>
            </div>
        </div >
    )
}