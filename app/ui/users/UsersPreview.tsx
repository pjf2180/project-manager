'useClient';
import React from "react";
import { User } from "@/app/lib/models/members";

export function UsersPreview({ members }: { members: User[] }) {
    return (
        <div className="flex flex-row gap-2">
            {
                members.map((member: User) => {
                    return <UserAvatar key={member.id} member={member} />
                })
            }
            <div className="text-slate-300 flex justify-center items-center w-8 h-8 rounded-full border-2 border-slate-300">
                +
            </div>
        </div>
    )
}
export interface UserAvatarProps extends React.AllHTMLAttributes<HTMLDivElement> {
    member: User
}

export function UserAvatar({ member, ...otherProps }: UserAvatarProps) {
    return <div {...otherProps} className="text-slate-300 flex justify-center items-center w-8 h-8 bg-blue-400 rounded-full cursor-pointer">
        {member.name.charAt(0)}
    </div>
}