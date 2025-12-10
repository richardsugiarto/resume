import React from 'react';
import { publicURL } from '../../utils/publicURL';
import './css/Publication.css';
import { Container, Grid } from '@mui/material';

function Publication() {
    return (
        <>
            <div className="mypublication">
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
                        Publication
                    </h2>
                    <div style={{ border: '1px solid #e73131', width: '15%', margin: '0 auto' }}></div>
                    <Grid container style={{ paddingTop: '10vh' }} spacing={10}>
                        <Grid item md={6} xs={12}>
                            <img src={publicURL('/assets/[P1].webp')} width={600} height={300} className="i-publication" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <p style={{ textAlign: 'justify' }}>
                                <b>[P1]</b> Helmet Usage Detection on Motorcyclist Using Deep Residual Learning
                                <span style={{ fontFamily: 'courier', display: 'inline-block' }}>
                                    2021 3rd East Indonesia Conference on Computer and Information Technology (EIConCIT), IEEE
                                </span>
                                <i>
                                    <b>Richard Sugiarto</b>, Evan Kusuma Susanto, and Yosi Kristian
                                </i>
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Publication;
