import styled from 'styled-components';

export const Container = styled.ul`
    position: relative;

`;

export const MenuItem = styled.li`
    position: relative;
    margin: 10px 0;
    cursor: pointer;
    margin-bottom: 15px;

    span.text{
        color: #fff;
        font-weight: 300;
        font-size: 14px;
    } 
`;

export const Percent = styled.span`
    position: relative;
    width: 100%;
    height: 6px;
    background: #081921;
    display: block;
    margin-top: 5px;
`;

export const Valor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #03a9f4;
`;


