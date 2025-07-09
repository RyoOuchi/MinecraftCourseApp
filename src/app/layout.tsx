import { ReactNode } from "react";
import { Noto_Sans_JP, Noto_Sans } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";

const notoJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--japanese-primary-font",
});
const noto = Noto_Sans({
    subsets: ["latin"],
    variable: "--english-primary-font",
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ja" className={`${notoJP.variable} ${noto.variable}`}>
            <body>
                <Header />
                <div className="main-wrapper">
                    <LeftPanel />
                    <RightPanel />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
