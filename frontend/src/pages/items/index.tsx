import styles from './styles.module.css';
import { Layout } from "../../components/layout";
import { LocationSelector } from '../../components/location-selector';
import { TextInput } from '../../components/text-input';
import { AiOutlineSearch } from 'react-icons/ai';
import { WishItem } from '../../components/wish-item';
import { wishes } from '../../services/wish-service';
import { useState } from 'react';
import { Item, items } from '../../services/item-service';

export const Items = () => {
    const [v, setV] = useState(0);
    const [search, setSearch] = useState('');
    
    const sortedItems = wishes.map(wish => wish.item);
    const wishItemIds = new Set(wishes.map(wish => wish.item.id));
    for (const item of items) {
        if (!wishItemIds.has(item.id)) sortedItems.push(item);
    }

    return <Layout>
        <div className={styles.container}>
            <div className={styles.title}>Lista de items</div>
            <LocationSelector value='RS, Restinga, Eugênio Rodrigues, 298' />
            <TextInput value={search} onChange={setSearch} startAdornment={<AiOutlineSearch size={24}/>} />
            <div className={styles.divider}></div>
            {sortedItems
            .filter(item => item.label?.toLowerCase()?.includes(search.toLowerCase()))
            .map(item => {
                const selected = wishItemIds.has(item.id);
                return <WishItem
                    imageUrl={item.imageUrl}
                    label={item.label}
                    selected={selected}
                    onChange={() => {
                        if (selected) {
                            const index = wishes.findIndex(wish => wish.item.id === item.id);
                            wishes.splice(index, 1);
                        } else {
                            const id = Math.floor(Math.random() * 1000000000);
                            wishes.push({ id, item });
                        }
                        setV(v+1);
                    }}
                />
            })}
        </div>
    </Layout>
};
