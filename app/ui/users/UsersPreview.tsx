import { Member } from "@/app/lib/models/members";

export function UsersPreview({ members }: { members: Member[] }) {
    return (
        <div className="flex flex-row gap-2">
            {
                members.map((member: Member) => {
                    return <div className="text-slate-300 flex justify-center items-center w-8 h-8 bg-blue-200 rounded-full">
                        {member.name.charAt(0)}
                    </div>
                })
            }
            <div className="text-slate-300 flex justify-center items-center w-8 h-8 rounded-full border-2 border-slate-300">
                +
            </div>
        </div>
    )
}