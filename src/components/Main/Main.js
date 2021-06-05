import React from 'react'
import { FirstWord, MainContainer, MainImage, MainTitle, SecondWord, ThirdWord } from './styles'
import MainImg from '../../assets/main.png'

export const Main = () => (
    <MainContainer>
        <MainTitle>
            <FirstWord className="change__about"></FirstWord>
            <SecondWord className="change__work"></SecondWord>
            <ThirdWord className="change__contact"></ThirdWord>
        </MainTitle>
        <MainImage src={MainImg}/>
    </MainContainer>
)
