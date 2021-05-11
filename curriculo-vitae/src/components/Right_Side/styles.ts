import styled from 'styled-components';

export const Container = styled.div`
    grid-area: right_Side;
    position: relative;
    background: #fff;
    padding: 40px;
`;

export const About = styled.div`
    margin-bottom: 50px;

    :last-child{
        margin-bottom: 0;
    }

    p{
        color: #333;
        text-align: justify;
    }
`;

export const Title2 = styled.h2`
    color: #003147;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
`;

export const Box = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
`;