export default function BoardPage() {
    return <div className="flex">
        <div className="w-1/3 p-4 border border-solid border-white">
            <div className="p-4 flex justify-between mb-4 border border-solid border-white">
                <div>OPEN</div>
                <div>6</div>
            </div>
            <div className="flex flex-col gap-0">
                <BoardTaskCard title="Website Redesign"></BoardTaskCard>
                <BoardTaskCard title="When looking at a particular location"></BoardTaskCard>
                <BoardTaskCard title="Website Redesign"></BoardTaskCard>
            </div>

        </div>
        <div className="w-1/3 p-4 border border-solid border-white">Column 2</div>
        <div className="w-1/3 p-4 border border-solid border-white">Column 3</div>
    </div>
}

function BoardTaskCard({ title }: { title: string }) {
    return <div className="p-4 flex flex-col gap-3 border border-solid justify-between">
        <div>tags</div>
        <div>{title}</div>
        <div>users</div>
    </div>
}