import React from 'react';
import { publicURL } from '../../utils/publicURL';
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
                            <img src={publicURL('/assets/3d-boy-peep.png')} height={400} className="i-about" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <p style={{ textAlign: 'justify' }}>
                                Richard Sugiarto is a Software Engineer focused in AI, <b>Machine Learning</b>, and <b>Python development</b>. He has built AI systems, including an <b>MCP-based AI research-matchmaking agent</b> with a custom tool-calling backend (OpenAlex and web verification) and system prompt for reliable multi-step research workflows. He also strengthened a company-wide <b>DL/ML platform</b> by improving statistical rigour, expanding model capabilities, and delivering reliable, reproducible model evaluation at scale, and previously developed an <b>AI-powered lead qualification system</b> using llama and Zapier for real-time automation.
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default About;
