'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NewTaskLink() {
    const pathName = usePathname();
    return (
        <Link href={`${pathName}?modalOpen=true`}>new task</Link>
    )
}