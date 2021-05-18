import styled from 'styled-components';

export const Container = styled.ul`
    position: relative;

`;

export const MenuItem = styled.li`
    position: relative;
    margin: 10px 0;
    cursor: pointer;

    span.icon{
        display: inline-block;
        width: 30px;
        font-size: 16px;
        color: #03a9f4;
        line-height: 25px;
    }

    span.text{
        color: #fff;
        font-weight: 300;
        font-size: 14px;
        line-height: 25px;
    }    
`;

