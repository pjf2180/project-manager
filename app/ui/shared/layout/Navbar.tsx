'use client';
import { useRef, useState } from "react";
import { User } from "../../../lib/models/members";
import { UserAvatar } from "../../users/UsersPreview";

import { useClickOutside } from "../hooks/useClickOutside";

const user: User = {
    email: 'myemail@gmail.com',
    id: '1',
    name: 'Ratoncito',
    password: '1234',
    lastName: 'Perez',
    profileImage: ''
}
export type NavbarProps = {
    signOutAction: (formData: FormData) => void
}
export function Navbar({ signOutAction }: NavbarProps) {
    const [open, setIsOpen] = useState(false);
    const handleAvatarClick = () => {
        setIsOpen(x => !x);
    }
    return <div className="flex justify-between bg-white p-2 border-b pr-8 pl-8 pt-4 pb-4 relative">
        <div className="flex ">
            <div className="flex items-center border-r border-gray-500 pr-4 mr-4">
                Taskio
            </div>
            <div>
                <input className="p-3 rounded-sm" type="text" placeholder="Search for anything" />
            </div>
        </div>
        <div className="flex items-center">
            <div className="mr-2">
                <UserAvatar onClick={handleAvatarClick} member={user} />
            </div>
            {open && <Dialog signOutAction={signOutAction} />}
            <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

        </div>
    </div>
}

export function Dialog({ signOutAction }: {  signOutAction: (formData: FormData) => void }) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(containerRef, () => {
        console.log('x');
    })

    return (
        <div ref={containerRef} className="absolute top-[70px] right-8 rounded-md border w-[200px] p-8 bg-white">
            <form action={signOutAction}>
                <button>Logout</button>
            </form>
        </div>
    );
}