"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchPanel from "./SearchPanel";
import { usePathname } from "next/navigation";

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(true);
    };

    const handleClose = () => {
        setShowSearch(false);
    };

    const pathname = usePathname();

    return (
        <>
            <header className="header">
                <div className="left">
                    <Link href="/" className="header-logo">
                        <Image
                            src="/minecraft-logo.png"
                            alt="Minecraft Logo"
                            width={100}
                            height={100}
                            className="logo-image"
                        />
                        <h1>
                            MINECRAFT
                            <span className="course">
                                プログラ
                                <br />
                                ミング
                                <br />
                                コース
                            </span>
                        </h1>
                    </Link>
                    {/* <div className="header-logo">
                        <Image
                            src="/minecraft-logo.png"
                            alt="Minecraft Logo"
                            width={100}
                            height={100}
                            className="logo-image"
                        />
                        <h1>
                            MINECRAFT
                            <span className="course">
                                プログラ
                                <br />
                                ミング
                                <br />
                                コース
                            </span>
                        </h1>
                    </div> */}
                    <nav className="nav-links">
                        <Link
                            href="/about"
                            className={
                                pathname === "/about" ? "active-link" : ""
                            }
                        >
                            About
                        </Link>
                        <Link
                            href="/docs"
                            className={
                                pathname === "/docs" ? "active-link" : ""
                            }
                        >
                            Docs
                        </Link>
                        <Link
                            href="/playground"
                            className={
                                pathname === "/playground" ? "active-link" : ""
                            }
                        >
                            Playground
                        </Link>
                        <Link
                            href="/questions"
                            className={
                                pathname === "/questions" ? "active-link" : ""
                            }
                        >
                            問題集
                        </Link>
                    </nav>
                </div>
                <div className="right">
                    <button
                        className="search-bar-button"
                        onClick={handleSearchClick}
                    >
                        Search Website...
                    </button>
                    <button className="send-feedback-button">Feedback</button>
                    <button className="contribute-button">Contribute</button>
                </div>
            </header>

            {showSearch && <SearchPanel onClose={handleClose} />}
        </>
    );
}
