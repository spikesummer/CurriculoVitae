import React from 'react';
import { Container, Title2, Box, BoxItem} from './styles';

const Interest: React.FC = () => {
    return(
        <Container>
            <Title2>Interesses</Title2>
            <Box>
                <BoxItem>
                    <i className="fa fa-paint-brush" aria-hidden="true"></i>
                    UX/UI Design
                </BoxItem>
                <BoxItem>
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                    Front-end
                </BoxItem>
                <BoxItem>
                    <i className="fa fa-database" aria-hidden="true"></i>
                    Back-end
                </BoxItem>
                <BoxItem>
                    <i className="fa fa-mobile-phone fa-3x" aria-hidden="true"></i>
                    Mobile
                </BoxItem> 
            </Box>
        </Container>
    )
};

export default Interest;