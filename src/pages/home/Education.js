import React from 'react';
import './css/Education.css';
import { Container, Grid } from '@mui/material';

function Education() {
    return (
        <>
            <div className="myeducation">
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
                        Education
                    </h2>
                    <div style={{ border: '1px solid #e73131', width: '15%', margin: '0 auto' }}></div>
                    <Grid container style={{ paddingTop: '10vh' }} spacing={6}>
                        <Grid item md={6} xs={12}>
                            <span style={{ textAlign: 'justify' }}>
                                <h3>Master of Information Management</h3>
                                <p>National Taiwan University of Science and Technology, Taipei, Taiwan</p>
                                <p>Information Management Department 02/2020 – 01/2022</p>
                                <p>GPA - 4.20 / 4.30</p>
                                <p>
                                    Thesis: Motion Learning using 3D Reconstruction Pose from Multiple Cameras with Dynamic Time Warping.
                                    Proposed a similarity mechanism to improve accuracy in distinguishing motions.
                                </p>
                            </span>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <span style={{ textAlign: 'justify' }}>
                                <h3>Bachelor of Science</h3>
                                <p>Institut Sains dan Teknologi Terpadu Surabaya (Formerly Sekolah Tinggi Teknik Surabaya)</p>
                                <p>Computer Science Major 07/2015-07/2019</p>
                                <p>GPA - 3.82 / 4.00</p>
                                <p>
                                    Final Project: Helmet Usage Detection on Motorcyclist Using Deep Residual Learning{' '}
                                    <b>
                                        <a href="#Publication">[P1]</a>
                                    </b>
                                    . Helmet Usage Detection on Motorcyclist Using Deep Residual Learning is an automated way to detect
                                    motorcyclists who do not wear a helmet from dashcam footage.
                                </p>
                                <p>The Best Undergraduate Student at Informatics Technology Department iSTTS, Surabaya, Indonesia, 2019.</p>
                            </span>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Education;
