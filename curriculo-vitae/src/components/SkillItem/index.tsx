import React from 'react';
import {Container, Title, Percent, Valor} from './styles';

export interface Props{
    skill: string;
    size: string;
}

const SkillItem: React.FC<Props> = ({
    skill,
    size
}) => {
    return(
        <Container>
            <Title>{skill}</Title>
            <Percent>
                <Valor style={{width: size}}></Valor>
            </Percent>             
        </ Container>
    )
};

export default SkillItem;