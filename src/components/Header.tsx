"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchPanel from "./SearchPanel";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleClose = () => {
    setShowSearch(false);
  }

  return (
    <>
      <header className="header">
        <div className="left">
          <div className="header-logo">
            <Image
              src="/minecraft-logo.png"
              alt="Minecraft Logo"
              width={100}
              height={100}
              className="logo-image"
            />
            <h1>
              MINECRAFT<span className="course">コース</span>
            </h1>
          </div>
          <nav className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/about">About</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
        <div className="right">
          <button className="search-bar-button" onClick={handleSearchClick}>
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
