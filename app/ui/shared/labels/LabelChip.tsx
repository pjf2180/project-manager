import { Label } from "@/app/lib/models/labels";
import clsx from "clsx";
import { BackgroundColorPalette } from "../design/ColorPalette";

export function LabelChip({ label }: { label: Label }) {
    const backgroundColor = BackgroundColorPalette[label.color]['DEFAULT'];

    return <div className={clsx('p-1 rounded-md text-white text-sm', backgroundColor)}>
        {label.text.toUpperCase()}
    </div>
}