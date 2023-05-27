import styles from './styles.module.css';

export interface TextInputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (value: string) => void;
}

export const TextInput = ({
    onChange,
    placeholder,
    value,
    type,
}: TextInputProps) => {
    return <input
        value={value ?? ''}
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={styles.container}
    ></input>
};
