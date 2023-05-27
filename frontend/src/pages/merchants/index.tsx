import styles from './styles.module.css';
import { Layout } from "../../components/layout";
import { LocationSelector } from '../../components/location-selector';
import { merchants } from '../../services/merchant-service';
import { MerchantItem } from '../../components/merchant-item';
import { wishes } from '../../services/wish-service';
import { useNavigate } from 'react-router-dom';

export const Merchants = () => {
    const navigate = useNavigate();

    return <Layout>
        <div className={styles.container}>
            <div className={styles.title}>Mercados</div>
            <LocationSelector value='RS, Restinga, Eugênio Rodrigues, 298' />
            <div className={styles.divider}></div>
            {merchants
            .map(merchant => (
                <MerchantItem
                    {...merchant}
                    onClick={() => navigate(`/mercados/${merchant.id}`)}
                    count={
                        wishes
                        .filter(wish => merchant.products.find(product => product.item.id === wish.item.id))
                        .length
                    }
                />
            ))}
        </div>
    </Layout>
};
