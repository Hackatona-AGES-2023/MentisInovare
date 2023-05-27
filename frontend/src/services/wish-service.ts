import { Item } from "./item-service";

export interface Wish {
    id: number;
    item: Item;
}

export const wishes: Wish[] = [];
