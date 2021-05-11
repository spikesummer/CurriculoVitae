import React from 'react';
import { Container, MenuItem, Percent, Valor} from './styles';

export interface Props{
    language: string;
    size: string;
}

const LanguageItem: React.FC<Props> = ({
    language,
    size
}) => {
    return(
        <Container>
            <MenuItem>
                <span className="text">{language}</span>
                <Percent>
                    <Valor style={{width: size}}></Valor>
                </Percent> 
            </MenuItem>          
        </ Container>
    )
};

export default LanguageItem;