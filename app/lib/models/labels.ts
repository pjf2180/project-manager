export type Label = {
    text: string;
    color: 'blue' | 'red'|'green';
}

export type LabelGroupRaw = {
    organization_id?: string;
    options_json: string;
}
export type LabelGroup = {
    organization_id?: string;
    options: Label[];
}