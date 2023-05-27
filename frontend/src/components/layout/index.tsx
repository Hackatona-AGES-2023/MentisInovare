import { ReactNode } from 'react';
import { Tabs } from '../tabs';
import styles from './styles.module.css';

export interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({
    children
}: LayoutProps) => {
    return <div className={styles.container}>
        <div className={styles.content}>
            {children}
        </div>
        <Tabs />
    </div>
};
