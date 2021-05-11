import React from 'react';
import EducationItem from '../EducationItem';
import { Container, Title } from './styles';

const Education: React.FC = () => {
    return(
        <Container>
            <Title>Escolaridade</Title>
            <EducationItem year="2019 - 2022" course="Análise e Desenvolvimento de Sistemas" school="Fatec - Rubens Lara"/>
            <EducationItem year="2017 - 2019" course="Técnico em Eletrônica" school="Etec - Aristóteles Ferreira"/>
            <EducationItem year="2007 - 2009" course="Direito" school="Universidade de Ribeirão Preto"/>
        </Container>
    )
};

export default Education;