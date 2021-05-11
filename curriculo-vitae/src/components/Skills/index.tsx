import React from 'react';
import { Container, Title2} from './styles';
import SkillBox from '../SkillBox';

const Skills: React.FC = () => {
    return(
        <Container>
            <Title2>Conhecimentos Profissionais</Title2>
            <SkillBox/>
        </Container>
    )
};

export default Skills;