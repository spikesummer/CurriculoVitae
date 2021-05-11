import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: row;
    margin: 10px 0;

    @media(max-width: 1000px){
        flex-direction: column; 
    }
`;

export const YearCompany = styled.div`
    min-width: 150px;

    h5{
        text-transform: uppercase;
        color: #848c90;
        font-weight: 600;
    
        :last-child{
            @media(max-width: 1000px){
                margin-bottom: 5px;
            } 
        }
    }
`;

export const Text = styled.div`
    h4{
        text-transform: uppercase;
        color: #2a7da2;
        font-size: 16px;
    }
`;