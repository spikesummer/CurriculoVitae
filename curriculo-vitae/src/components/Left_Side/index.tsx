import React from 'react';
import { Container } from './styles';
import ProfileText from '../ProfileText'
import ContactInfo from '../ContactInfo';
import Education from '../Education';
import Language from '../Language';

const LeftSide: React.FC = () => {
    return(
        <Container>
           <ProfileText/>
           <ContactInfo/>
           <Education/> 
           <Language/>
        </Container>
    )
};

export default LeftSide;