import React from 'react';
import { Container, MenuItem, Year, Course, School} from './styles';

export interface Props{
    year: string;
    course: string;
    school: string;
}

const EducationItem: React.FC<Props> = ({
    year,
    course,
    school
}) => {
    return(
        <Container>
            <MenuItem>
                <Year>{year}</Year>
                <Course>{course}</Course>
                <School>{school}</School>
            </MenuItem>
          
        </ Container>
    )
};

export default EducationItem;