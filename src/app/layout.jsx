import { barlow, bellefair, barlow_condensed } from "@/utils/fonts";
import "../styles/global.css";
import { Navbar } from "@/components/header/navbar"

export const meta = {
    title: "Frontend Mentor | Space tourism website",
    description: "Expoler the Space"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${bellefair.variable} ${barlow_condensed.variable} ${barlow.variable} `}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )
}