import styles from './styles.module.css';
import { IoLocationSharp } from "react-icons/io5";

export interface LocationSelectorProps {
    value?: string;
    onChange?: (value?: string) => void;
}

export const LocationSelector = ({
    value,
    onChange
}: LocationSelectorProps) => {
    return <div className={styles.container}>
        <IoLocationSharp color='#55EB48' size={32} />
        <div>{value}</div>
    </div>
};
