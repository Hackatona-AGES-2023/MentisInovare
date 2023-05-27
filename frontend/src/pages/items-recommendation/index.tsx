import styles from './styles.module.css';
import { Layout } from "../../components/layout";
import { merchant1 } from '../../services/mock';
import { ProductItem } from '../../components/product-item';

export const ItemsRecommendation = () => {
    return <Layout>
        <div className={styles.container}>
            <div className={styles.title}>Mercado {merchant1.name}</div>
            <div className={styles.title}>Promoções recomendadas</div>
            <div className={styles.graph}></div>
            {merchant1.productsRecommendation.map(product => (
                <ProductItem product={product} />
            ))}
        </div>
    </Layout>
};
