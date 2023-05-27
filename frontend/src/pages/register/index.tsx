import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Logo } from '../../components/logo';
import { TextInput } from '../../components/text-input';
import { UserTypeSelect } from '../../components/user-type-select';
import { setCurrentIsMerchant } from '../../services/auth-service';
import styles from './styles.module.css'

export const Register = () => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const navigate = useNavigate()
    const [isMerchant, setIsMerchant] = useState(false)

    return <div className={styles.container}>
        <Logo></Logo>
        <div className={styles.fields}>
            <TextInput value={email} onChange={setEmail} placeholder='Email' />
            <TextInput type='password' value={password} onChange={setPassword} placeholder='Senha' />
        </div>
        <div className={styles.bottom}>
            <Button onClick={() => {
                if (isMerchant) {
                    navigate('/items/recomendacao');
                } else {
                    navigate('/items');
                }
                setCurrentIsMerchant(isMerchant);
            }}>CADASTRAR</Button>
            <UserTypeSelect isMerchant={isMerchant} setIsMerchant={setIsMerchant} />
            <div>Possui conta? <Link to={{ pathname: '/login' }}>Logue aqui</Link></div>
        </div>
    </div>;
}
