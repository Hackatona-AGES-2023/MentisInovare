import { Select } from '../select';
import styles from './styles.module.css';

export interface UserTypeSelectProps {
    isMerchant?: boolean;
    setIsMerchant?: (isMerchant: boolean) => void;
}

export const UserTypeSelect = ({
    isMerchant,
    setIsMerchant
}: UserTypeSelectProps) => {
    return (
        <div className={styles.container}>
            <Select value={isMerchant} onChange={() => setIsMerchant?.(true)} />
            <div>Mercado</div>
            <Select value={!isMerchant} onChange={() => setIsMerchant?.(false)} />
            <div>Usuário</div>
        </div>
    )
}
