import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProfileContainer = styled.div`
    box-sizing: border-box;
    @media (min-width: 768px) {
        width: 100%;
        max-width: 1180px;
        padding: 0 30px;
        margin: 32px auto;
  }
`
export const ProfileHeader = styled.header`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`
export const ProfileTitle = styled.span`
    font-size: 20px;
    margin-left: 24px
`
export const Banner = styled.img`
    height: 64px;
`
export const LinkProfile = styled(Link)`
    width: 260px;
    height: 60px;
    margin-left: auto;
    margin-top: 0;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
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
export const ButtonProfile = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
    &:hover {
        border-color: #999
    }
`
export const Title = styled.h1` 
    margin-top: 80px;
    margin-bottom: 24px;
`

export const List = styled.ul` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
`

export const ListItem = styled.li` 
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    transition: 
`

export const ButtonItem = styled.button` 
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;
    font-size: 16px;
    color: #5f5f5f;
    &:hover {
        opacity: 0.8;
    }
`

export const TitleCard = styled.strong` 
    display: block;
    margin-bottom: 16px;
    color: #41414d
`
export const DescriptionCard = styled.p` 
    margin: 20px 0px 30px 0px;
    color: #737380;
    line-height: 21px;
    font-size: 16px
`