import { ReactNode } from "react";
import LeftPanel from "@/components/LeftPanel";
import PlaceholderLeftPanel from "@/components/PlaceHolderLeftPanel";

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <LeftPanel />
            <div className="main-position-style">
                <PlaceholderLeftPanel />
                <main>
                    <div className="contents">{children}</div>
                </main>
            </div>
        </>
    );
}
