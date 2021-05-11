import React from 'react';
import { Container, ExperienceContainer, Title2} from './styles';
import ExperienceItem from '../ExperienceItem';

const Experience: React.FC = () => {
    return(
        <Container>
            <Title2>Experiências</Title2>
            <ExperienceContainer>

                <ExperienceItem 
                    year="2010 - 2020" 
                    company="Autônomo" 
                    job="Advogado" 
                    text="Atuação na área cível, família e trabalhista."
                />

                <ExperienceItem 
                    year="2014 - 2015" 
                    company="Loja Coisas de Familia" 
                    job="Auxiliar Administrativo" 
                    text="Verificação de entrada e saida de correspondência; Recebimento e envio de documentos; Recepção do publico em geral; Arquivamento de documentos; Apresentação de relatórios e planilhas."
                />

                <ExperienceItem 
                    year="2011 - 2012" 
                    company="Atento S/A" 
                    job="Supervisor de Operação" 
                    text="Gestão de equipe; Atuação com indicadores de TMO, TMA, absenteismo, turnover, aderência e qualidade; Aplicação de feedback e monitorias."
                />

            </ExperienceContainer>
        </Container>
    )
};

export default Experience;