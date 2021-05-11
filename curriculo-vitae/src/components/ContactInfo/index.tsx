import React from 'react';
import ContactInfoItem from '../ContactInfoItem';
import { Container, Title } from './styles';

const ContactInfo: React.FC = () => {
    return(
        <Container>
            <Title>Contatos</Title>
            <ContactInfoItem icon="icon fa fa-phone" text="+55 13 98881-2406" />
            <ContactInfoItem icon="icon fa fa-envelope-o" text="spike.summer@hotmail.com" />
            <ContactInfoItem icon="icon fa fa-github-alt" text="github.com/spikesummer" />
            <ContactInfoItem icon="icon fa fa-linkedin" text="linkedin.com/in/adriano-costa-486202184" />
            <ContactInfoItem icon="icon fa fa-map-marker" text="Guarujá, São Paulo, Brasil" />
        </ Container>
    )
};

export default ContactInfo;