import styles from './styles.module.css';
import { Tab } from "./components/tab";
import { AiFillHome } from 'react-icons/ai';
import { FaList } from 'react-icons/fa';

export const Tabs = () => {
    return <div className={styles.container}>
        <Tab icon={<AiFillHome size={24} color='#55EB48' />} label='Home' />
        <Tab icon={<FaList size={24} color='#55EB48' />} label='Items'/>
    </div>;
};
