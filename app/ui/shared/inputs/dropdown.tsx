'use client';
import { useRef, useState, ReactNode, MouseEvent } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export type DropdownInputs = {
    options: string[];
    selections: string[];
    onSelection: (selection: string) => void;
    renderSelection?: (id: string) => ReactNode;
    renderOption?: (id: string) => ReactNode;
};

export function Dropdown({ options, selections, renderSelection, renderOption, onSelection }: DropdownInputs) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    useClickOutside(containerRef, () => {
        setDrawerOpen(false);
    });

    const handleInputClick = () => {
        setDrawerOpen(true);
    };
    const handleOptionClick = (e: MouseEvent<HTMLOptionElement>, selectedLabel: string) => {
        e.stopPropagation();
        onSelection(selectedLabel);
    };

    const notSelectedOptions = options.filter((option: string) => {
        return !selections.includes(option);
    });
    const containerHeight = '60px';

    return <>
        <div
            className="flex flex-col border rounded-md bg-white"
            style={{ cursor: 'text', position: 'relative', height: containerHeight }}
            ref={containerRef}
            onClick={handleInputClick}>
            <div className="flex gap-2 p-1">
                {
                    selections.map((o: string) => {
                        return renderSelection ? renderSelection(o) : <div>{o}</div>
                    })
                }
            </div>
            {
                drawerOpen && notSelectedOptions.length >0 && <div
                    className="bg-white border rounded-md rounded-t-none border-t-0"
                    style={{ position: 'absolute', top: '50px', left: '-1px', right: '-1px', maxHeight: '120px' }}>
                    {
                        notSelectedOptions.map((notSelectedOptionId: string) => {
                            return <option
                                key={notSelectedOptionId}
                                className="hover:bg-blue-100 p-2"
                                style={{ cursor: 'pointer' }}
                                onClick={(e) => handleOptionClick(e, notSelectedOptionId)}>
                                {
                                    renderOption? renderOption(notSelectedOptionId) : <div>{notSelectedOptionId}</div>
                                }
                            </option>
                        })
                    }
                </div>
            }
        </div>

    </>
}