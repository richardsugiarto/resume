import React from 'react';
import { publicURL } from '../../utils/publicURL';
import './css/Home.css';
import { Container, Grid, Avatar, Button } from '@mui/material';

function Home() {
    return (
        <>
            <div className='back'></div>
            <div className="myhome">
                <Container maxWidth="xl">
                    <Grid container spacing={6}>
                        <Grid item md={6} xs={12}>
                            <div className="hometext">
                                <h1>Hi I'm Richard Sugiarto</h1>
                                <h2>Software Engineer & Website Developer</h2>
                                <br />
                                <Button variant="primary" href="mailto:rich.sugiarto@gmail.com" size="large" sx={{ backgroundColor: '#212529', color: 'white' }}>
                                    Contact Now
                                </Button>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='img-rounded-circle'>
                                <Avatar src={publicURL('/assets/cute-young-boy-waving-his-hand-edited-preview.png')} sx={{ width: '100%', height: 500 }} />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Home;
