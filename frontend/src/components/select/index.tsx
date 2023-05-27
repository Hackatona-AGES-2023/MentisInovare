import styles from './styles.module.css';

export interface SelectProps {
    value?: boolean;
    onChange?: (value: boolean) => void;
}

export const Select = ({
    value,
    onChange
}: SelectProps) => {
    return <div
        onClick={() => onChange?.(!value)}
        className={styles.container}
        style={{ background: value ? '#55EB48' : undefined }}
    />;
};
