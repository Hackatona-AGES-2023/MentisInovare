import { merchant1, merchant2 } from "./mock";
import { Product } from "./product-service";

export interface Merchant {
    id: number;
    name: string;
    products: Product[];
    productsRecommendation: Product[];
}

export const merchants = [merchant1, merchant2]
