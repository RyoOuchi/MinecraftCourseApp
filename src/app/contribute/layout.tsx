import { ReactNode } from "react";

export default function ContributeLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}