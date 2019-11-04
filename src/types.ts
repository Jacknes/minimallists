export type Item = {
    value: string;
    type: ItemType;
}

export type ItemType = 'plain' | 'check' | 'radio';