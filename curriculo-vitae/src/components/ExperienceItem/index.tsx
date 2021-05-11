import React from 'react';
import {Container, YearCompany, Text} from './styles';

export interface Props{
    year: string;
    company: string;
    job: string;
    text: string;
}

const ExperienceItem: React.FC<Props> = ({
    year,
    company,
    job,
    text
}) => {
    return(
        <Container>
            <YearCompany>
                <h5>{year}</h5>
                <h5>{company}</h5>
            </YearCompany>
            <Text>
                <h4>{job}</h4>
                <p>{text}</p>
            </Text>
        </Container>
    )
};

export default ExperienceItem;