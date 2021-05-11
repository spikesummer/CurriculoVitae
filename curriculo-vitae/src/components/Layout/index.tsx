import React from 'react';
import LeftSide from '../Left_Side';
import RightSide from '../Right_Side';
import { Grid } from './styles';

const Layout: React.FC = () => {
    return(
        <Grid>
            <LeftSide/>
            <RightSide/>
        </Grid>
    )
};

export default Layout;