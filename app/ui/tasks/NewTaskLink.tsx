'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NewTaskLink() {
    const pathName = usePathname();
    return (
        <div className="flex justify-center border-2 p-5 rounded-b-md text-xs text-gray">
            <Link href={`${pathName}?modalOpen=true`}>
                ADD NEW TASK
            </Link>
        </div>
    )
}