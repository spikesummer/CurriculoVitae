import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 30px;

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

export const ExperienceContainer = styled.ul`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`;