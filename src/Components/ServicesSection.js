import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from '../Components/ServicesCard';
import software from '../img/software-development.svg';
import web from '../img/web-development.svg';
import mobile from '../img/mobile-development.svg';

function ServicesSection() {
    return (
        <div>
            <InnerLayout>
                <ServicesSectionStyled>
                    <Title title={'Interests'} span={'Interests'} />
                    <div className="services">
                        {<ServiceCard
                            image={software}
                            title={'Software Development'}
                            paragraph={'Writing desktop applications in - C/C++, Java, Python, Golang, and C# and the .NET Tech Stack. Working with SDLC and DevOps software'} />}
                        {<ServiceCard
                            image={web}
                            title={'Web Development'}
                            paragraph={'Full stack developer. UI/UX Design with Figma and Adobe. Front End Development with HTML/CSS/JS and frameworks like React, Angular and Vue. Backend Development with Django, Springboot, and ExpressJS'} />}
                        {<ServiceCard
                            image={mobile}
                            title={'Database Development'}
                            paragraph={'Data analytics with Python, Rlang, and MATLAB. ETL, and SAP data migration. Relational database design with mySQL, PostgreSQL, Oracle, and MiscrosoftSQL. Non-relational database design with MongoDB and Redis'} />}
                    </div>
                </ServicesSectionStyled>
            </InnerLayout>
        </div>
    );
}

const ServicesSectionStyled = styled.section`
    .services {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        

        @media screen and (max-width: 1000px) {
            flex-direction: column; 
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
        }

    }

`;

export default ServicesSection;