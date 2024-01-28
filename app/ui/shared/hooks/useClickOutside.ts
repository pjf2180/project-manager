'use client';

import { MutableRefObject, useEffect } from "react";

export function useClickOutside(elRef: MutableRefObject<HTMLDivElement | null>, handler: Function) {

    useEffect(() => {
        function onClickHandler(event: globalThis.MouseEvent) {
            const target = event.target as Node;
            if (elRef.current && document.contains(target) && !elRef.current.contains(target)) {
                handler();
            }
        };

        document.addEventListener('click', onClickHandler);

        return () => {
            document.removeEventListener('click', onClickHandler);
        }
    }, []);


}