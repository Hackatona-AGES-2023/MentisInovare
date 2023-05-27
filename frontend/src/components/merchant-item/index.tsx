import styles from './styles.module.css';

export interface MerchantItemProps {
    name: string;
    count: number;
    onClick?: () => void;
}

export const MerchantItem = ({
    name,
    count,
    onClick
}: MerchantItemProps) => {
    return <div className={styles.container} onClick={onClick}>
        <div className={styles.name}>{name}</div>
        <div className={styles.name}>{count}</div>
    </div>
};
