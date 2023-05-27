import styles from './styles.module.css';

export interface SelectProps {
    value?: boolean;
    onChange?: (value: boolean) => void;
}

export const Select = ({
    value,
    onChange
}: SelectProps) => {
    return <div className={styles.container}>
        
    </div>;
};
