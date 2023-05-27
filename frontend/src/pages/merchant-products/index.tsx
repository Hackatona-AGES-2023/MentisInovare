import styles from './styles.module.css';
import { Layout } from "../../components/layout";
import { LocationSelector } from '../../components/location-selector';
import { ProductItem } from '../../components/product-item';
import { useParams } from 'react-router-dom';
import { merchants } from '../../services/merchant-service';
import { products } from '../../services/product-service';

export const MerchantProducts = () => {
    const { id } = useParams()
    const merchant = merchants.find(merchant => merchant.id === Number(id))

    return <Layout>
        <div className={styles.container}>
            <div className={styles.title}>Produtos de {merchant?.name}</div>
            <LocationSelector value='RS, Restinga, Eugênio Rodrigues, 298' />
            <div className={styles.divider}></div>
            {merchant?.products
            .map(product => (
                <ProductItem product={product} />
            ))}
        </div>
    </Layout>
};
