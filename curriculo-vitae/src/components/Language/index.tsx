import React from 'react';
import { Container, Title } from './styles';
import LanguageItem from '../LanguageItem'

const Language: React.FC = () => {
    return(
        <Container>
            <Title>Idiomas</Title>
            <LanguageItem language="Inglês" size='30%'/>
            <LanguageItem language="Espanhol" size='60%'/>
        </Container>
    )
};

export default Language;