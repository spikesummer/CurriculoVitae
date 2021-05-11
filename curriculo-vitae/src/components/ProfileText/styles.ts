import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    h2{
        color: #fff;
        font-size: 1.5em;
        margin-top: 20px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 600;
        line-height: 1.4em;
    }

    h2 span{
        font-size: 0.8em;
        font-weight: 300;    
    }
`;

export const ImgBx = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
    
    