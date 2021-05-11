import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 30px;

    :last-child{
        margin-bottom: 0;
    }
`;

export const Title2 = styled.h2`
    color: #003147;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
`;

export const Box = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1000px){   
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const BoxItem = styled.li`
    color: #333;
    font-weight: 500;
    margin: 10px 0;

    .fa{
    color: #03a9f4;
    font-size: 18px;
    width: 25px;
`;