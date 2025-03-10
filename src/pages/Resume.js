import React from 'react';
import './css/Resume.css';
import { Container, Grid } from '@mui/material';

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
                        <Grid item md={6} xs={12}>
                            <span style={{ textAlign: 'justify' }}>
                                <h3>Software Engineer</h3>
                                <p style={{ fontStyle: 'italic' }}>
                                    Beyond Media Global (柏媒網絡科技有限公司), Taipei, Taiwan 03/2023 – 03/2025
                                </p>
                                <p>Required Skills: PHP, JS, HTML, CSS, Python, Liquid, Nginx, Networking, Linux, DevOps</p>

                                <p><strong> CMS & Ecommerce Web Development </strong></p>
                                <p>►Developed 7 websites and maintaining 2 using WordPress CMS</p>
                                <p>►Developed 2 websites, maintaining 1 using Shopify Ecommerce (Liquid)</p>
                                <p>►Developed 3 websites using Wix (Velo)</p>
                                <p>►Developed 2 websites using Squarespace</p>
                                <p>►Maintained BMG website, integrating Slack and Copper CRM via Zapier ,lead management system</p>

                                <p><strong>DevOps (Basic)</strong></p>
                                <p>►AWS, Alibaba Cloud, Google Cloud (Compute Engine)</p>
                                <p>►Synology NAS (automation and synchronization)</p>
                                <p>►Nginx (SSL, basic security), Cloudflare CDN</p>
                                <p>►Network Management - Handled local and server network</p>

                                <p><strong>Fullstack Development (React, Python)</strong></p>
                                <p>►Created an insertion order app integrated with Zoho Books</p>
                                <p>►Implemented Google-based login and API synchronization</p>

                            </span>

                            <span style={{ textAlign: 'justify', display: 'none' }}>
                                <h3>Freelance Deep Learning Developer</h3>
                                <p style={{ fontStyle: 'italic' }}>
                                    Eastern Union Interactive Corp. (EUI), Taipei, Taiwan 06/2020 – 01/2021
                                </p>
                                <p>Required Skills: Python, Machine Learning, Computer Vision, Android Native, IOS</p>
                                <p>
                                    ►Developed glare-detection using OpenCV to apply pre-processing steps of Taiwan’s Alien Resident
                                    Certificate (ARC)’s validation.
                                </p>
                                <p>
                                    ►Designed a light-weight module to validate the position ARC card by perform ARC card recognition given
                                    an RGB image using tiny-yolo.
                                </p>
                                <p>►Implemented the glare- and landmark-detection modules using Android Studio and IOS swift.</p>
                            </span>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <span style={{ textAlign: 'justify' }}>
                                <h3>CMS React Developer</h3>
                                <p style={{ fontStyle: 'italic' }}>Funpodium (奕兆有限公司), Taipei, Taiwan 08/2022 – 02/2023</p>
                                <p>Required Skills: ReactJS, JavaScript, TypeScript, HTML, CSS, PHP, Drupal, Linux</p>
                                <p>
                                    ►Cooperate with product managers and back-end development engineers to complete the requirements and
                                    provide continuous technical support.
                                </p>
                                <p>
                                    ►In some cases, the front-end library is needed to construct the UI design and interaction design
                                    solutions.
                                </p>
                                <p>
                                    ►Maintain continuous attention to new technologies in front-end related fields and solve problems with
                                    reasonable technical solutions.
                                </p>
                            </span>

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
