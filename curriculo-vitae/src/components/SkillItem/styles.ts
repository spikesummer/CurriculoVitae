import styled from 'styled-components';

export const Container = styled.li`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 150px 1fr;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    @media (max-width: 1000px){
        margin: 10px;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Title = styled.h4`
    text-transform: uppercase;
    color: #848c99;
    font-weight: 500;
`;

export  const Percent = styled.div`
    position: relative;
    width: 100%;
    height: 10px;
    background: #f0f0f0;
`;

export const Valor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #03a9f4;
`;