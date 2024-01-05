import { signOut } from "@/auth";
import { Navbar } from "./Navbar";

export function NavbarContainer() {
    return (
        <Navbar
            signOutAction={async (formData: FormData) => {
                'use server';
                await signOut();
            }} />
    );
}