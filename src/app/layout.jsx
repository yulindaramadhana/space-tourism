import { barlow, bellefair, barlow_condensed } from "@/utils/fonts";
import "../styles/global.css";
import { Navbar } from "@/components/header/navbar"
import Script from "next/script";

export const meta = {
    title: "Frontend Mentor | Space tourism website",
    description: "Expoler the Space"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFGMMSDJ')`,
                }}
            />
            <body className={`${bellefair.variable} ${barlow_condensed.variable} ${barlow.variable} `}>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFGMMSDJ"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>
                </noscript>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )
}
