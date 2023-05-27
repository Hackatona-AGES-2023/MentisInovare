import styles from './styles.module.css';
import { Layout } from "../../components/layout";
import { LocationSelector } from '../../components/location-selector';
import { TextInput } from '../../components/text-input';
import { AiOutlineSearch } from 'react-icons/ai';
import { WishItem } from '../../components/wish-item';

export const Items = () => {
    return <Layout>
        <div className={styles.container}>
            <div className={styles.title}>Lista de items</div>
            <LocationSelector value='asdasdas' />
            <TextInput startAdornment={<AiOutlineSearch size={24}/>} />
            <div className={styles.divider}></div>
            <WishItem />
            <WishItem />
            <WishItem />
            <WishItem />
            <WishItem />
            <WishItem />
        </div>
    </Layout>
};
