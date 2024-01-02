'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function NewTaskLink({children}:{children: React.ReactNode}) {
    const pathName = usePathname();
    return (
        <Link href={`${pathName}?createTaskOpen=true`}>
            {children}
        </Link>
    )
}