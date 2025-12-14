import React from 'react';
import './css/Resume.css';
import { Container, Grid } from '@mui/material';
import experienceData from '../../data/experience';

function Resume() {
    return (
        <>
            <div className="myResume">
                <Container max-width="xl">
                    <h2
                        style={{
                            color: '#555',
                            fontFamily: 'helvetica_ce_55_romanregular',
                            fontWeight: 'bolder',
                            fontSize: '35px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Experience
                    </h2>
                    <div style={{ border: '1px solid #e73131', width: '15%', margin: '0 auto' }}></div>
                    <Grid container style={{ paddingTop: '10vh' }} spacing={6}>
                        {experienceData.map(({ id, title, company, skills, jobs, isShownInResume }) => isShownInResume && (
                            <Grid key={id} item md={6} xs={12} >
                                <span style={{ textAlign: 'justify' }}>
                                    <h3>{title}</h3>
                                    <p style={{ fontStyle: 'italic' }}>
                                        {company}
                                    </p>
                                    <p>Required Skills: {skills}</p>
                                    {jobs.map((job) => (
                                        <p className='medium' key={job}>►{job}</p>
                                    ))}

                                </span>
                            </Grid>
                        ))}
                        <Grid item md={6} xs={12}>

                            <span style={{ textAlign: 'justify', display: 'none' }}>
                                <h3>Deep Learning Laboratory Assistant</h3>
                                <p style={{ fontStyle: 'italic' }}>
                                    Institut Sains dan Teknologi Terpadu Surabaya (iSTTS) 02/2019 – 01/2020
                                </p>
                                <p>Required Skills: Python, Linux, Machine Learning, Computer Vision</p>
                                <p>
                                    ►Prepared lecture materials, specifically on image classification, segmentation, and regression topics.
                                </p>
                                <p>
                                    ►Collaborated with IT undergraduate students who already have computer science (especially deep
                                    learning) research for undergraduate program.
                                </p>
                            </span>

                            <span style={{ textAlign: 'justify', display: 'none' }}>
                                <h3>Informatics Laboratory Assistant</h3>
                                <p style={{ fontStyle: 'italic' }}>
                                    Institut Sains dan Teknologi Terpadu Surabaya (iSTTS) 01/2017 – 01/2019
                                </p>
                                <p>Required Skills: C++, C#, Javascript, Java, PHP, MYSQL, Code Igniter(CI), Client-Server Programming</p>
                                <p>
                                    ►Maintained the data center server which record all the grades data of IT undergraduate student's
                                    programming test.
                                </p>
                                <p>
                                    ►Released and edited programming books (C++, C#, Javascript, Java, PHP, MYSQL, CI, and Client Server
                                    Programming) used by programming classes each involving around 30-40 students.
                                </p>
                                <p>
                                    ►Collaborated with other assistants to maintain Informatics laboratory computer's hardware, software,
                                    networking, and holding a programming test for IT undergraduate student.
                                </p>
                            </span>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Resume;
