import React, {useState} from 'react'
import './style'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import { useHistory } from 'react-router-dom'


import { 
    RegisterContainer, 
    Container,
    SectionContainer,
    FormRegister,
    InputCity,
    InputUF,
    FormRow,
    FormLink,
    FiLogInIcon
    
} from './style'

import { InputForm, ButtonForm } from '../../global'

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    async function handleRegister(e) {
        e.preventDefault();   
        const data = {name, email, whatsapp,city, uf}

        try {
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
        } catch (err) {
            alert('Erro no cadastro, tente novamente')
        }

    }
    return(
        <RegisterContainer>
            <Container>
                <SectionContainer>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas
                        a encontrarem os casos da sua ONG
                    </p>
                    <FormLink to="/">
                        <FiLogInIcon size={16} color="#E02041"/>
                        Já tenho tenho cadastro
                    </FormLink>
                </SectionContainer>
                <FormRegister onSubmit={handleRegister}>
                    <InputForm 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <InputForm 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <InputForm 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <FormRow>
                        <InputCity
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <InputUF 
                            placeholder="UF"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </FormRow>
                    <ButtonForm type="submit">Cadastrar</ButtonForm>
                </FormRegister>
            </Container>
        </RegisterContainer>
    )
}