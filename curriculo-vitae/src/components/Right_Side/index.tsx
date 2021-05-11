import React from 'react';
import {Container} from './styles';
import Profile from '../Profile';
import Experience from '../Experience';
import Skills from '../Skills';
import Interest from '../Interest';

const RightSide: React.FC = () => {
    return(
        <Container>
            <Profile/>
            <Experience/>
            <Skills/>
            <Interest/>
        </Container>
    )
};

export default RightSide;