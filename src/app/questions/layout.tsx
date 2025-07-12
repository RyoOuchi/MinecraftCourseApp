import "../globals.css";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import { ReactNode } from "react";
import PlaceholderLeftPanel from "@/components/PlaceHolderLeftPanel";
import PlaceholderRightPanel from "@/components/PlaceHolderRightPanel";

export default function QuestionsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <LeftPanel />
            <RightPanel />
            <div className="main-position-style">
                <PlaceholderLeftPanel />
                <main>
                    <div className="contents">{children}</div>
                </main>
                <PlaceholderRightPanel />
            </div>
        </>
    );
}
