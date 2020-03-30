import React, { useEffect, useState }from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import './style'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

import { 
    ProfileContainer,
    ProfileHeader,
    ProfileTitle,
    Banner,
    LinkProfile,
    ButtonProfile,
    Title,
    List,
    ListItem,
    ButtonItem,
    TitleCard,
    DescriptionCard
 } from './style'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory();


    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    async function handleDelete(id) {
        try{
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(err){
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }

    
    return (
        <ProfileContainer>
            <ProfileHeader>
                <Banner src={logoImg} alt="Be the Hero"/>
                <ProfileTitle>Bem vinda, {ongName}</ProfileTitle>
                <LinkProfile to="incidents/new">Cadastrar novo caso</LinkProfile>
                <ButtonProfile type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </ButtonProfile>
            </ProfileHeader>
            <Title>Casos Cadastrados</Title >
            <List>
                {incidents.map(incident => (
                    <ListItem key={incident.id}>
                    <TitleCard>CASO:</TitleCard>
                    <DescriptionCard>{incident.title}</DescriptionCard>
                    <TitleCard>DESCRIÇÃO:</TitleCard>
                    <DescriptionCard>{incident.description}</DescriptionCard>
                    <TitleCard>VALOR:</TitleCard>
                    <DescriptionCard>
                        {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
                    </DescriptionCard>
                    <ButtonItem onClick={() => handleDelete(incident.id)}><FiTrash2/></ButtonItem>
                </ListItem>
                ))}
            </List>
            
        </ProfileContainer>
    )
}