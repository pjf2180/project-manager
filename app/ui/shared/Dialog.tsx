'use client';
import { ReactNode, useRef } from "react";
import { useClickOutside } from "./hooks/useClickOutside";

export function Dialog({ onDismissHandler, children }: { onDismissHandler: Function, children: ReactNode }) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(containerRef, onDismissHandler);
    return <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/50 bg-opacity-75  p-4 shadow-lg">
        <div className="bg-white rounded-md w-6/12 h-full" ref={containerRef}>
            {children}
        </div>
    </div>
}