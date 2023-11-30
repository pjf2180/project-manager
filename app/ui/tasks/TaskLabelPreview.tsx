import { Label } from "@/app/lib/models/labels";

export function TaskLabelPreview({ labels }: { labels: Label[] }) {
    const colorVariants = {
        blue: 'bg-blue-600 hover:bg-blue-500',
        red: 'bg-red-600 hover:bg-red-500',
        green: 'bg-green-600 hover:bg-green-500'
    };
    return (<div className="flex flex-row gap-2">
        {
            labels.map((label: Label) => {
                const backgroundColor: string = colorVariants[label.color];
                return <div key={label.id} className={`h-1 w-6 ${backgroundColor}`}></div>
            })
        }
    </div>);
}
