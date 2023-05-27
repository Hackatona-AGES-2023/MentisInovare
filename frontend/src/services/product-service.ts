import { Item } from "./item-service";
import { Merchant } from "./merchant-service";
import { product1, product2, product3 } from "./mock";

export interface Product {
    id: number;
    fullPrice: number;
    discountPercentage: number;
    item: Item;
    merchant: Merchant;
}

export const products = [product1, product2, product3];
