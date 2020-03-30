import React, {useState} from 'react'
import './style'
import logoImg from '../../assets/logo.svg'

import { 
    RegisterContainer, 
    Container,
    SectionContainer,
    FormRegister,
    FormLink,
    FiLogInIcon
    
} from './style'

import api from '../../services/api'
import { useHistory } from 'react-router-dom'



import { InputForm, ButtonForm, TextAreaForm } from '../../global'

export default function NewIncident(){
    const [title, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId')

    const history = useHistory();

    async function handleNew(e){
        e.preventDefault();
        const data = {title, description,value};

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push("/profile")

        }catch(err){
            alert("Erro ao cadastrar caso")
        }

    }
    return(
        <RegisterContainer>
            <Container>
                <SectionContainer>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói
                        para resolver isso
                    </p>
                    <FormLink to="/profile">
                        <FiLogInIcon size={16} color="#E02041"/>
                        Voltar para home
                    </FormLink>
                </SectionContainer>
                <FormRegister onSubmit={handleNew}>
                    <InputForm 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextAreaForm 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />  
                  <InputForm 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <ButtonForm type="submit" onClick={handleNew}>Cadastrar</ButtonForm>
                </FormRegister>
            </Container>
        </RegisterContainer>
    )
}