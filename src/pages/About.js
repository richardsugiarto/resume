import React from 'react';
import { publicURL } from '../utils/publicURL';
import './css/About.css';
import { Container, Grid } from '@mui/material';

function About() {
    return (
        <>
            <div className="myabout">
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
                        About
                    </h2>
                    <div style={{ border: '1px solid #e73131', width: '15%', margin: '0 auto' }}></div>
                    <Grid container style={{ paddingTop: '10vh' }}>
                        <Grid item md={6} xs={12}>
                            <img src={publicURL('/assets/neural.png')} width={400} height={300} className="i-about" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <p style={{ textAlign: 'justify' }}>
                                Richard Sugiarto is a Software Engineer focused on <b>Python</b> and <b>React</b> development, experienced in building integrations like Google API sync. I also have expertise in CMS and eCommerce platforms, along with cloud infrastructure management. Previously optimized UI/UX and system performance as a CMS React Developer, and recently built an AI-powered lead qualification system in <b>Python</b> using <b>NVIDIA LLaMA</b> and Zapier for real-time lead filtering automation.
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default About;
