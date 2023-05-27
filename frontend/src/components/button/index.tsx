import styles from './styles.module.css';
import { ReactNode } from "react";

export interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
}

export const Button = ({
    children,
    onClick
}: ButtonProps) => {
    return <button onClick={onClick} className={styles.container}>
        {children}
    </button>
};
