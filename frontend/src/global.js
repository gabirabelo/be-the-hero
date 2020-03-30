import styled from 'styled-components'

export const Container = styled.div`
    -webkit-font-smoothing: antialiased;
`
export const InputForm = styled.input`
   widht: 100%;
   height: 60px;
   color: #333;
   border: 1px solid #dcdce6;
   border-radius: 8px;
   padding: 0 24px;
   outline: 0;
   margin-bottom: 10px;
`

export const TextAreaForm = styled.textarea`
   widht: 100%;
   height: 130px;
   color: #333;
   border: 1px solid #dcdce6;
   border-radius: 8px;
   padding: 24px;
   outline: 0;
   margin-bottom: 10px;
   font-family: Roboto;
   line-height: 24px;
   resize: vertical;
`

export const ButtonForm = styled.button`
   widht: 100%;
   height: 60px;
   background: #e02041;
   border: 0;
   border-radius: 8px;
   color: #fff;
   font-weight: 700;
   margin-top: 16px;
   display: inline-block;
   text-align: center;
   text-decoration: none;
   font-size: 16px;
   line-height: 60px;
   transition: filter 0.2s;
   &:hover {
       filter: brightness(90%);
       cursor: pointer;
   }
`
