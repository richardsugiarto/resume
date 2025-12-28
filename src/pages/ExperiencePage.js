import { useState } from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Grid, Container, Typography, Collapse } from "@mui/material";
import experienceData from "../data/experience";

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };
  return (
    <div className="myContainer">
      <Container maxWidth="xl">
        <h1>Work Experience Portfolio</h1>
        <Grid container spacing={2}>
          {experienceData.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 900 }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={project.logo}
                  alt={project.companyNamePortfolio}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h2>{project.jobTitle}</h2>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>{project.company}</h3>
                  </Typography>
                  <Collapse in={expandedId === project.id} collapsedSize={70} timeout="auto" unmountOnExit>
                    <Typography gutterBottom component="div">
                      <p className="medium">{project.description}</p>
                    </Typography>
                  </Collapse>

                  {/* show truncated description when not expanded */}
                  {expandedId !== project.id && (
                    <Typography gutterBottom component="div" noWrap>
                      <p className="medium">{project.description}</p>
                    </Typography>
                  )}

                  <Button size="small" onClick={() => handleExpandClick(project.id)}>
                    {expandedId === project.id ? 'Show Less' : 'Show More'}

                  </Button>
                </CardContent>
                <CardActions>
                  <Button><Link to={`/experience/${project.id}`}>View Details</Link></Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div >
  );
}
