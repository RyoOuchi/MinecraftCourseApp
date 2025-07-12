// app/about/layout.tsx
import { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main>
                <div className="contents">{children}</div>
            </main>
        </>
    );
}
