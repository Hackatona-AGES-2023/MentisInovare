import { Product } from '../../services/product-service';
import styles from './styles.module.css';

export interface ProductItemProps {
    product: Product
}

export const ProductItem = ({
    product,
}: ProductItemProps) => {
    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.img} style={{ backgroundImage: `url(${product.item.imageUrl})` }} />
            <div>{product.item.label}</div>
        </div>
        <div>
            <span style={{ color: 'green' }}>R${product.fullPrice * (1 - product.discountPercentage)}</span>
            {' '}<span style={{ color: 'darkred', textDecoration: 'line-through' }}>(R${product.fullPrice})</span>
        </div>
    </div>
};
