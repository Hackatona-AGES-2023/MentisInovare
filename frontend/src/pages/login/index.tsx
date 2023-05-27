import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { Logo } from '../../components/logo';
import { TextInput } from '../../components/text-input';
import styles from './styles.module.css'

export const Login = () => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    return <div className={styles.container}>
        <Logo></Logo>
        <div className={styles.fields}>
            <TextInput value={email} onChange={setEmail} placeholder='Email' />
            <TextInput type='password' value={password} onChange={setPassword} placeholder='Senha' />
        </div>
        <div className={styles.bottom}>
            <Button>ACESSAR</Button>
            <div>Esqueceu a senha? <Link to={{ pathname: '/login' }}>Clique aqui</Link></div>
            <div>Não tem conta? <Link to={{ pathname: '/register' }}>Crie aqui</Link></div>
        </div>
    </div>;
}
