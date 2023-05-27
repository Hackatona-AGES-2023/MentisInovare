import styles from './styles.module.css';
import { ReactNode } from "react";

export interface TabProps {
    icon?: ReactNode;
    label?: string;
    selected?: boolean;
    onClick?: () => void;
}

export const Tab = ({
    icon,
    label,
    selected,
    onClick
}: TabProps) => {
    return <div className={styles.container} onClick={onClick}>
        {icon}
        <div className={selected ? styles.selected : ''}>
            {label}
        </div>
    </div>
};
