import { ReactNode } from "react";

export function Dialog({ children }: { children: ReactNode }) {
    return <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-100 bg-opacity-75  p-4 shadow-lg">
            {children}
    </div>
}