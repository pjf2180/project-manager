'use client';
import { User } from "@/app/lib/models/members";
import { Dropdown } from "../shared/inputs/dropdown";
import { useState } from "react";
import { UserAvatar } from "./UsersPreview";

export type MemberDropdownContainerProps = {
    members: User[];
    selectedMemberIds: string[];
}

export function MemberDropdown({ members, selectedMemberIds }: MemberDropdownContainerProps) {
    const [selections, setSelections] = useState<string[]>([...selectedMemberIds]);
    const handleMemberSelection = (selectedMemberId: string) => {
        setSelections((prevSelections: string[]) => [...prevSelections, selectedMemberId])
    };
    const handleMemberDelete = (deleteMemberId: string) => {
        setSelections(prevFormData => (prevFormData.filter(m => m !== deleteMemberId)))
    };

    return (<>
        <Dropdown
            options={members.map(m => m.id)}
            selections={selections}
            renderSelection={(id: string) => {
                const member = members.find(x => x.id === id) as User;
                return <UserAvatar key={id} onClick={() => handleMemberDelete(id)} member={member} />
            }}
            renderOption={(id: string) => {
                const member = members.find(x => x.id === id);
                return member?.name ?? '';
            }}
            onSelection={handleMemberSelection} />
        <input type="hidden" name="members" value={JSON.stringify(selections)} />
    </>)
}

