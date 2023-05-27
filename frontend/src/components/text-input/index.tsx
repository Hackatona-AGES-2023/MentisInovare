import { ReactNode } from 'react';
import styles from './styles.module.css';

export interface TextInputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (value: string) => void;
    startAdornment?: ReactNode;
}

export const TextInput = ({
    onChange,
    startAdornment,
    placeholder,
    value,
    type,
}: TextInputProps) => {
    return <div className={styles.container}>
        {startAdornment && (
            <div className={styles.startAdornment}>
                {startAdornment}
            </div>
        )}
        <input
            value={value ?? ''}
            type={type}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
        ></input>
    </div>
};
