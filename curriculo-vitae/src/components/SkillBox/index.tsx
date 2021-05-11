import React from 'react';
import {Container} from './styles';
import SkillItem from '../SkillItem'

const SkillBox: React.FC = () => {
    return(
        <Container>
            <SkillItem skill="html" size="75%"/>
            <SkillItem skill="css" size="95%"/>
            <SkillItem skill="javascript" size="85%"/>
            <SkillItem skill="reactjs" size="70%"/>
            <SkillItem skill="c/c++" size="65%"/>
            <SkillItem skill="php" size="65%"/>
            <SkillItem skill="mysql" size="65%"/>
            <SkillItem skill="python" size="65%"/>
            <SkillItem skill="Assembly" size="65%"/>
            <SkillItem skill="Arduino" size="75%"/>
            <SkillItem skill="Programação de PIC" size="65%"/>
            <SkillItem skill="CLP(Ladder)" size="45%"/>
        </ Container>
    )
};

export default SkillBox;