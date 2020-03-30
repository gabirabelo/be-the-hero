import styled from 'styled-components'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'



export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: unset;
    @media (min-width: 768px) {
        width: 100%;
        max-width: 1120px;
        height: 100vh;
        margin: 0 auto;
        align-items: center;
        flex-direction: row;
        justify-content: space-between
  }
`
export const SectionLogin = styled.section`
    justify-content: center;
    flex-direction: column;
    text-align: center;
    display: flex;
    height: 100vh;
    padding: 0 10px;
    @media (min-width: 768px) {
        width: 100%;
        max-width: 350px;
        margin-right: 30px;
        height: 100%;
        padding: 0px;
    }
`
export const FormLogin = styled.form`

 display: flex;
        flex-direction: column;
    @media (min-width: 768px) {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
    }
  
`
export const FormTitle = styled.h1`
    @media (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 32px;
    }
`

export const FormLink = styled(Link)`
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.8
    }
`

export const FiLogInIcon = styled(FiLogIn)`
    margin-right: 8px;
`

export const Banner = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
    @media (min-width: 768px) {
        position: initial;
        opacity: 1;
        width: 50em;
        height: 50em;
    }
`