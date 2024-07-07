import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (

        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'Jan 2019 - May 2023'}
                        title={'B.S in Computer Engineering'}
                        subTitle={'Virginia Tech'}
                        text={'Graduated with a B.S. in Computer Engineering from Virginia Tech with a GPA of 3.04/4.00 with a specilization in Software Systems. President of the Virginia Tech Thomistic Institute Chapter and Computer Engineering Tutor for the Bradley Department of Electrical and Computer Engineering.'} />

                    <ResumeItem
                        year={'Sept 2015 - Jun 2019'}
                        title={'High School Diploma'}
                        subTitle={'Lake Braddock Secondary School'}
                        text={'Graduated with 4.12/4.00 GPA. Intel International Science Fair Competitor - Won 4th Place award in the Embedded Systems Category and a 2nd place American Meteorlolical Society Award. Computer Science Honor Society Member, Cross Country Competitor, and RTR Robotics Teammate.'} />
                </div>


                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'May 2022 - August 2022'}
                        title={'Satellite Software and QA Intern'}
                        subTitle={'Northrop Grumman | Dulles, VA'}
                        text={'▪ Placed on the NG Simulation team assisting the “flatsat” program, an experimental new design group that creates “flat\” “satellites” that act as a development and simulation environment for the flight software and hardware of developing missions \n▪ Main role supporting lab software operations: building libraries for the DSS, a proprietary satellite simulation software, in C/C++, writing scripts to configure the software at runtime using Python/STOL, and using the DSS to debug hardware rack issues ▪ Developed/merged to the Satellite Simulation core new libraries allowing the software to support National Instruments DMM cards to work and temp. sensing services allowing thermistors, thermocouplers, and custom transducers using C/C++ and MSVC ▪ Built libraries allowing the DSS Sim. Software to simulate a CAN bus analyzer on simulated satellites, with C++/GNU ▪ Generated hardware rack STOL config. files using a Python script that parses hardware harness connection spreadsheets'} />
                    <ResumeItem
                        year={'May 2021 - Sep 2021'}
                        title={'Satellite Software and QA Intern'}
                        subTitle={'Northrop Grumman | Dulles, VA'}
                        text={'▪ Placed on NG “flatsat” team assisting mostly lab software and hardware operations, mainly rack assembly/verification, database design, inventory management, cable design, and flight component FPGA design ▪ Developed multiple front and backend hardware relational databases generating spreadsheets both for tracking the flow of hardware parts between programs and tracking the use of tools by different missions using .NET ,C# , Access, and VBA ▪ Created and Managed multiple internal SharePoint platforms designing the front end forms that the employees would use, the back end databases that would store the information, and the data transformation that would happen between the two to create spreadsheets and graphics to present to Systems Engineers and Management ▪ Performed simulation hardware rack verification, and debugging using STOL/ Python scripts, oscilloscopes, DMM’s, and Breakout Boxes to verify the correct assembly of racks by technicians before mating with the flight CPU used for satellite simulation'} />
                    <ResumeItem
                        year={'May 2019 - Oct 2019'}
                        title={'Embedded Software Intern'}
                        subTitle={'JEM Engineering | Laurel, MD'}
                        text={'▪ Main role in hardware and software QA of phased antenna array cards. Performed testing on PCBs and their embedded software through a series of scripts developed in Python and programs built in LabView collecting data through an oscilloscope ▪ Performed transformation and visualization of test data from generated sheets using Python, MATLAB, and Excel for validation ▪ Maintained documentation and shipped finalized beamforming antenna, FLEXSCAN, a JHU Applied Physics Lab Project ▪ Automated a fifty man-hour long antenna film spooling process using an Arduino MCU with steppers/belts/sensors to regulate spool speed and pressure ▪ Designed and manufactured flywheels, belts, and harnesses for PCB card testing and film spooling automation using SolidWorks for modeling, 3D printers for shaping, and CNC routers for precision editing'} />
                    <ResumeItem
                        year={'May 2018 - Aug 2018'}
                        title={'RF Data Analytics Intern'}
                        subTitle={'JEM Engineering | Laurel, MD'}
                        text={'▪ Main role in assisting design, manufacturing, and testing of a phased antenna array as part of the FLEXSCAN project ▪ Using beamforming requirements specified by the customer, generated antenna card dimensions using MATLAB and Python mathematical modeling ▪ Designed model of the card in SolidWorks and ran simulations on card beamforming to extract data for visualization ▪ Transformed data from extracted CSV sheets into graphics displaying beamforming strength at required angles to present to customers and technicians before continuing to the design phase ▪ Designed PCB card layout in SolidWorks and Convene, maintained card documentation and data to be sent to the manufacturer, and ordered card hardware to be soldered to the board: IC chips, connectors, terminators'} />
                </div>
            </InnerLayout>
        </ResumeStyled >
    );
}

const ResumeStyled = styled.section`
    .small-title {
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 4rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume;