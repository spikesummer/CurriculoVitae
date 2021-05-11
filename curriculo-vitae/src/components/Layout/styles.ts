import styled from 'styled-components';

export const Grid = styled.div`
    position: relative;
    width: 100%;
    max-width: 1000px;
    min-height: 1000px;
    margin: 50px 0px;
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'left_Side right_Side';
    box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);

    @media (max-width: 1000px){
        grid-template-columns: repeat(1, 1fr);
        grid-template-areas: 'left_Side' 'right_Side';
    }
`;