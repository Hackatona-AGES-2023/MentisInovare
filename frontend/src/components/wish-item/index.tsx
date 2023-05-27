import { Select } from '../select';
import styles from './styles.module.css';

export interface WishItemProps {
    imageUrl?: string;
    label?: string;
    selected?: boolean;
    onChange?: (selected: boolean) => void;
}

export const WishItem = () => {
    return <div className={styles.container}>
        <Select />
    </div>
};
