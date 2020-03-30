import React, {useState} from 'react'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

import { useHistory } from 'react-router-dom'


import { 
    LoginContainer, 
    SectionLogin, 
    FormLogin, 
    FormTitle,
    FormLink,
    FiLogInIcon,
    Banner
} from './styles'

import { InputForm, ButtonForm } from '../../global'

export default function Login(){
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault(); 
        
        try{
            const response =  await api.post('sessions', {id})
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
        }
        catch(err){
            alert('Falha no login')

        }
    }

    return(
        <LoginContainer>
            <SectionLogin>
                <img src={logoImg} alt="Be the Hero"/>
                <FormLogin onSubmit={handleLogin}>
                    <FormTitle>Faça seu login</FormTitle>
                    <InputForm 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <ButtonForm type="submit">Entrar</ButtonForm>
                    <FormLink to="/register">
                        <FiLogInIcon size={16} color="#E02041"/>
                        Não tenho cadastro
                    </FormLink>
                </FormLogin>
            </SectionLogin>
            <Banner src={heroesImg} alt="Heroes"/>
        </LoginContainer>
    )
}