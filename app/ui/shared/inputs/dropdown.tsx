'use client';
import { useEffect, useRef, useState, ReactNode } from "react";

export type DropdownInputs = {
    options: string[];
    selections: string[];
    renderSelection: (id: string) => ReactNode;
    renderOption: (id: string) => ReactNode;
    onSelection: (selection: string) => void;
};

export function Dropdown({ options, selections, renderSelection, renderOption, onSelection }: DropdownInputs) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    useEffect(() => {
        function onClickHandler(event: globalThis.MouseEvent) {
            const target = event.target as Node;
            if (containerRef.current && !containerRef.current.contains(target)) {
                // onClickOutside();
                setDrawerOpen(false);
            }
        };

        document.addEventListener('click', onClickHandler);

        return () => {
            document.removeEventListener('click', onClickHandler)
        }
    }, []);

    const handleInputClick = () => {
        setDrawerOpen(true);
    };
    const handleOptionClick = (selectedLabel: string) => {
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
                    selections.map((o: string) => renderSelection(o))
                }
            </div>
            {
                drawerOpen && notSelectedOptions.length > 0 && <div
                    className="bg-white border rounded-md rounded-t-none border-t-0"
                    style={{ position: 'absolute', top: '50px', left: '-1px', right: '-1px', maxHeight: '120px' }}>
                    {
                        notSelectedOptions.map((notSelectedOptionId: string) => {
                            return <option
                                key={notSelectedOptionId}
                                className="hover:bg-blue-100 p-2"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleOptionClick(notSelectedOptionId)}>
                                    {
                                        renderOption(notSelectedOptionId)
                                    }
                            </option>
                        })
                    }
                </div>
            }
        </div>

    </>
}