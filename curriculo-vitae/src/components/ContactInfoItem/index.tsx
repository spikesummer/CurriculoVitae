import React from 'react';
import { Container, MenuItem} from './styles';

export interface Props{
    icon: string;
    text: string;
}


const ContactInfoItem: React.FC<Props> = ({
    icon,
    text
}) => {
    return(
        <Container>
            <MenuItem>
                <span className={icon}></span>
                <span className='text'>{text}</span>
            </MenuItem>
          
        </ Container>
    )
};

export default ContactInfoItem;