import React from 'react';
import { Container, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './css/Contact.css'

function Contact() {
    return (
        <>
            <div className='myContact'>
                <h2
                    style={{
                        color: '#555',
                        fontFamily: 'helvetica_ce_55_romanregular',
                        fontWeight: 'bolder',
                        fontSize: '35px',
                        textTransform: 'uppercase',
                        display: 'none'
                    }}
                >
                    Contact
                </h2>
                <div style={{ border: '1px solid #e73131', width: '15%', margin: '0 auto', display: 'none' }}></div>
                <div className="Footer" style={{ marginTop: '10vh', color: 'white' }}>
                    <Container maxWidth="xxl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '0' }}>
                        <Grid container spacing={6} >
                            <Grid item md={4} xs={12}>
                                <h6 style={{ fontWeight: 'bold', marginBottom: '2em', textTransform: 'uppercase' }}>Language</h6>
                                <p>Indonesian</p>
                                <p>English</p>
                                <p>Chinese</p>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <h6 style={{ fontWeight: 'bold', marginBottom: '2em', textTransform: 'uppercase' }}>Powered with</h6>
                                <p>ReactJS</p>
                                <p>CSS</p>
                                <p>Bootstrap</p>
                                <p>MUI</p>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <h6 style={{ fontWeight: 'bold', marginBottom: '2em', textTransform: 'uppercase' }}>Contact</h6>
                                <a href="mailto:rich.sugiarto@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}><p><EmailIcon /> rich.sugiarto@gmail.com</p></a>
                                <a href="https://www.linkedin.com/in/richard-sugiarto-32b677132/" style={{ textDecoration: 'none', color: 'inherit' }}><p><LinkedInIcon /> linkedin.com/in/richard-sugiarto-32b677132</p></a>
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginBottom: '1vh', backgroundColor: 'rgba(0, 0, 0, 0.9)', paddingTop: '10px', paddingBottom: '10px' }}>
                                © 2025 Copyright: Richard Sugiarto
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Contact;
