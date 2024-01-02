'use client';
import { Label } from "@/app/lib/models/labels";
import { MouseEventHandler, ReactNode, useState, MouseEvent, useRef, useEffect } from "react";
import { Dropdown } from "./dropdown";

export function SelectorContainer({ children, onClick, onClickOutside }: { children: ReactNode, onClick: MouseEventHandler<HTMLDivElement>, onClickOutside: () => void }) {

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onClickHandler(event: globalThis.MouseEvent) {
            const target = event.target as Node;
            if (containerRef.current && !containerRef.current.contains(target)) {
                onClickOutside();
            }
        };

        document.addEventListener('click', onClickHandler);

        return () => {
            document.removeEventListener('click', onClickHandler)
        }
    }, []);

    return <div ref={containerRef} onClick={onClick} className="flex flex-col border rounded-md" style={{ cursor: 'text', minHeight: '40px' }}>
        <label htmlFor="create-task-selector"></label>
        <div className="flex gap-2 p-1">
            {children}
        </div>
    </div>
}

export function LabelSelector(
    { initialSelection, optionLabels, onChange = () => { }, name }:
        {
            optionLabels: Label[],
            initialSelection: Label[],
            name: string,
            onChange?: (selections: string[]) => void
        }
) {
    const colors = {
        green: 'bg-green-100',
        blue: 'bg-blue-100',
        red: 'bg-red-100'
    }
    const [selectedOptions, setSelectedOptions] = useState<string[]>([...initialSelection].map(o => o.text));


    const handleSelection = (selectionText: string) => {
        setSelectedOptions((prevSelections) => {
            const updatedSelections = ([...prevSelections, selectionText]);
            onChange(updatedSelections);
            return updatedSelections;
        });
    };

    const removeSelection = (e: MouseEvent<HTMLDivElement>, selectionText: string) => {
        e.stopPropagation();
        setSelectedOptions(prev => {
            const updatedSelections = prev.filter(x => x !== selectionText)
            onChange(updatedSelections);
            return updatedSelections;
        });
    };

    const hiddenInputValues: Label[] = optionLabels.filter(x => selectedOptions.includes(x.text))

    return (
        <div className="flex flex-col">
            <div className="text-sm text-secondary">LABELS</div>
            <div style={{ position: 'relative' }}>
                <input name={name} type="hidden" value={JSON.stringify(hiddenInputValues)} />
                <Dropdown
                    options={optionLabels.map((l) => l.text)}
                    selections={selectedOptions}
                    renderSelection={(text: string) => {
                        const label: Label = optionLabels.find(x => x.text === text) as Label;
                        return <div className={`flex items-center rounded-md p-2 pr-4 pl-4 border ${colors[label.color]}`}>
                            {label.text} < div key={`${label.color}-${label.text}`} style={{ cursor: 'pointer' }
                            } onClick={(e) => removeSelection(e, label.text)}>&nbsp;&nbsp;x</div>
                        </div>
                    }}
                    renderOption={(text: string) => {
                        return text
                    }}
                    onSelection={handleSelection}

                />
            </div >
        </div >
    )
}
