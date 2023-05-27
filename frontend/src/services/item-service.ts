import { item1, item2, item3, item4, item5 } from "./mock";

export interface Item {
    id: number;
    imageUrl?: string;
    label: string;
}

export const items = [item1, item2, item3, item4, item5];
