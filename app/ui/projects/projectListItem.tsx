export function ProjectListItem({ item, selected }: { item: { title: string, memberCount: number }, selected: boolean }) {
    const selectedStyles = 'border-l-2 border-blue-500 bg-blue-100';
    const unSelectedStyles = 'border-l-2 border-transparent';
    return <div className={`flex items-center gap-4 pl-6  ${selected ? selectedStyles : unSelectedStyles}`}>
        <div className="w-10 h-10 bg-orange-300 rounded-md flex justify-center items-center">{getInitials(item.title)}</div>
        <div className="flex flex-col justify-between">
            <div>
                {item.title}
            </div>
            <div>
                {item.memberCount} Team Members
            </div>
        </div>
    </div>
}

function getInitials(title: string): string {
    const words = title.split(' ');
    const initials = words.map(word => word.charAt(0));
    const result = initials.join('');
    return result;
}