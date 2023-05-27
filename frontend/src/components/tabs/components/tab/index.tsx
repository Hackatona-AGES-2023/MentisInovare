import styles from './styles.module.css';
import { ReactNode } from "react";

export interface TabProps {
    icon?: ReactNode;
    label?: string;
    selected?: boolean;
}

export const Tab = ({
    icon,
    label,
    selected
}: TabProps) => {
    return <div className={styles.container}>
        {icon}
        <div className={selected ? styles.selected : ''}>
            {label}
        </div>
    </div>
};
