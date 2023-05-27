import { Select } from '../select';
import styles from './styles.module.css';

export interface WishItemProps {
    imageUrl?: string;
    label?: string;
    selected?: boolean;
    onChange?: (selected: boolean) => void;
}

export const WishItem = ({
    imageUrl,
    label,
    selected,
    onChange
}: WishItemProps) => {
    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.img} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className={styles.name}>{label}</div>
        </div>
        <Select value={selected} onChange={onChange} />
    </div>
};
