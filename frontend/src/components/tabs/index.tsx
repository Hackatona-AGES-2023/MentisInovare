import styles from './styles.module.css';
import { Tab } from "./components/tab";
import { AiFillHome, AiOutlineShop } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const Tabs = () => {
    const navigate = useNavigate()

    return <div className={styles.container}>
        <Tab icon={<AiFillHome size={24} color='#55EB48' />} label='Home' onClick={() => navigate('/items')} />
        <Tab icon={<AiOutlineShop size={24} color='#55EB48' />} label='Mercado' onClick={() => navigate('/mercados')}/>
    </div>;
};
