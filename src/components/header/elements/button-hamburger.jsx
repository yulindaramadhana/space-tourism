export const HamburgerButton = ({ openDrawer, funcOpenDrawer }) => {
    return (
        <div id="hamburger-button"
            onClick={funcOpenDrawer}
            className="nav-icon-menu
                        md:hidden
                        lg:hidden
                        z-20
                        fixed
                        top-[1.3rem]
                        px-8
                        right-0
                        cursor-pointer">
            {
                openDrawer
                    ?
                    <img src='assets/icons/icon-close.svg' alt="icon close navigation menu" />
                    :
                    <img src='assets/icons/icon-hamburger.svg' alt="navigation menu" />
            }
        </div>
    )
}