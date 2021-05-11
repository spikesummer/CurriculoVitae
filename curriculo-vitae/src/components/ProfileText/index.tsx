import React from 'react';
import { Container, ImgBx } from './styles';

const ProfileText: React.FC = () => {
    return(
        <Container>
            <ImgBx>
                <img src= "/assets/dri2.jpg" alt="imagem" />
            </ ImgBx>
            <h2>Adriano Costa<br/><span>Desenvolvedor</span></h2>
        </ Container>
    )
};

export default ProfileText;