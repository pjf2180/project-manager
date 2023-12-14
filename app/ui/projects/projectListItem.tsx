import clsx from "clsx";

export type ProjectListItemProps = {
    item: { title: string, memberCount: number },
    selected: boolean,
    avatarColor: string;
}

export function ProjectListItem({ item, selected, avatarColor }: ProjectListItemProps) {
    const selectedClasses = {
        main: 'border-l-2 border-blue-500 bg-blue-100 text-blue',
        caption: 'text-xs text-blue',
        projectName: 'text-sm text-blue font-semibold'
    };
    const unSelectedClasses = {
        main: 'border-l-2 border-transparent',
        caption: 'text-xs text-gray',
        projectName: 'text-sm text-main font-semibold'
    };
    return <div className={`flex items-center gap-4 pl-8 p-5  ${selected ? selectedClasses.main : unSelectedClasses.main}`}>
        <div className={clsx('w-9 h-9 rounded-md flex justify-center items-center', avatarColor)}>
            <div className="text-md text-white">
                {getInitials(item.title)}
            </div>
        </div>
        <div className="flex flex-col gap-0">
            <div className={clsx(selected ? selectedClasses.projectName : unSelectedClasses.projectName)}>
                {item.title}
            </div>
            <div className={clsx(selected ? selectedClasses.caption: unSelectedClasses.caption)}>
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