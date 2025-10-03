import React from 'react';
import './css/Skills.css';
import { Container, Grid } from '@mui/material';

function Skills() {
    const Language = [
        { label: 'English', percentage: '75%' },
        { label: 'Chinese', percentage: '20%' },
        { label: 'Indonesian', percentage: '100%' },
    ];
    const DeepLearning = [
        { label: 'Python', percentage: '85%' },
        { label: 'Machine Learning', percentage: '75%' },
        { label: 'Computer Vision', percentage: '75%' },
        { label: 'Linux', percentage: '75%' },
    ];
    const Website = [
        { label: 'ReactJS', percentage: '75%' },
        { label: 'JavaScript', percentage: '75%' },
        { label: 'TypeScript', percentage: '55%' },
        { label: 'PHP', percentage: '55%' },
        { label: 'AWS (VPS)', percentage: '50%' },
        { label: 'Google Cloud (VPS)', percentage: '50%' },
    ];
    return (
        <>
            <div className='mySkill' >
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
                        Skills
                    </h2>
                    <div style={{ border: '1px solid #e73131', width: '15%', margin: '0 auto' }}></div>
                    <Grid container style={{ paddingTop: '10vh' }} spacing={6}>
                        <Grid item md={4} xs={12}>
                            <h3>Language</h3>
                            {Language.map(({ label, percentage }) => (
                                <div key={label} style={{ marginBottom: '10px' }}>
                                    <div style={{ textAlign: 'justify', marginBottom: '10px' }}>{label}</div>
                                    <span>
                                        <div className="bartext">{percentage}</div>
                                        <div className="bar">
                                            <div className="barcontent" style={{ width: percentage }}></div>
                                        </div>
                                    </span>
                                </div>
                            ))}
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <h3>Deep Learning</h3>
                            {DeepLearning.map(({ label, percentage }) => (
                                <div key={label} style={{ marginBottom: '10px' }}>
                                    <div style={{ textAlign: 'justify', marginBottom: '10px' }}>{label}</div>
                                    <span>
                                        <div className="bartext">{percentage}</div>
                                        <div className="bar">
                                            <div className="barcontent" style={{ width: percentage }}></div>
                                        </div>
                                    </span>
                                </div>
                            ))}
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <h3>Website</h3>
                            {Website.map(({ label, percentage }) => (
                                <div key={label} style={{ marginBottom: '10px' }}>
                                    <div style={{ textAlign: 'justify', marginBottom: '10px' }}>{label}</div>
                                    <span>
                                        <div className="bartext">{percentage}</div>
                                        <div className="bar">
                                            <div className="barcontent" style={{ width: percentage }} />
                                        </div>
                                    </span>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Skills;
