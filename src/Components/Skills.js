import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from '../Components/ProgressBar';


function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5/CSS3/JS'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'Java/SpringBoot'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar
                        title={'ReactJS/AngularJS'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'C/C++'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'Python/Django'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'MySQL/PostgreSQL'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'.Net/C#'}
                        width={'40%'}
                        text={'40%'}
                    />
                    <ProgressBar
                        title={'Git/GitLab/Github'}
                        width={'85%'}
                        text={'85%'}
                    />
                </div>

            </InnerLayout>
        </SkillsStyled>

    );
}

const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills