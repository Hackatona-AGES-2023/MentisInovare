import { Item } from "./item-service";
import { Merchant } from "./merchant-service";
import { Product } from "./product-service";

export const item1: Item = {
    id: 1,
    imageUrl: '/assets/farinha.png',
    label: 'Farinha',
};

export const item2: Item = {
    id: 2,
    imageUrl: '/assets/arroz.png',
    label: 'Arroz',
};

export const item3: Item = {
    id: 3,
    imageUrl: '/assets/feijao.png',
    label: 'Feijão',
};

export const item4: Item = {
    id: 4,
    imageUrl: '/assets/aveia.png',
    label: 'Aveia',
};

export const item5: Item = {
    id: 5,
    imageUrl: '/assets/pao.png',
    label: 'Pão',
};

export const merchant1: Merchant = {
    id: 1,
    name: 'Liquidamais',
    products: [],
};

export const merchant2: Merchant = {
    id: 2,
    name: 'Mercado do zé',
    products: [],
};

export const product1: Product = {
    id: 1,
    fullPrice: 10,
    discountPercentage: 0.1,
    item: item2,
    merchant: merchant1
};

export const product2: Product = {
    id: 2,
    fullPrice: 8,
    discountPercentage: 0.2,
    item: item3,
    merchant: merchant1
};

export const product3: Product = {
    id: 3,
    fullPrice: 5,
    discountPercentage: 0.3,
    item: item4,
    merchant: merchant2
};

merchant1.products.push(product1, product2);
merchant2.products.push(product3);
