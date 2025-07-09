"use client";
import React, { useRef, useEffect } from "react";

export default function SearchPanel({ onClose }: { onClose: () => void }) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal" ref={modalRef}>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search Website..."
                        className="search-input"
                    />
                    <button className="close-button" onClick={onClose}>
                        esc
                    </button>
                </div>
            </div>
        </div>
    );
}
