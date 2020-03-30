import styled from 'styled-components'
import { InputForm } from '../../global'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const RegisterContainer = styled.div`
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

export const Container = styled.div`
    @media (min-width: 768px) {
        width: 100%;
        padding: 96px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;

  }
`

export const SectionContainer = styled.section`
    @media (min-width: 768px) {
        width: 100%;
        max-widht: 380px;
        margin-left: 40px;

  }
`

export const FormRegister = styled.form`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 20px;
  }
`

export const FormRow = styled.div`
    @media (min-width: 768px) {
        display: flex;
  }
`

export const InputCity = styled(InputForm)`
    @media (min-width: 768px) {
        width: 300px;
  }
`

export const InputUF= styled(InputForm)`
    @media (min-width: 768px) {
        width: 80px;
  }
`
export const FormLink = styled(Link)`
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

export const FiLogInIcon = styled(FiArrowLeft)`
    margin-right: 8px;
`




