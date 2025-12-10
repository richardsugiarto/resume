import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Grid, Container, Typography } from "@mui/material";
import experienceData from "../data/experience";

export default function ExperiencePage() {
  return (
    <div className="myContainer">
      <Container maxWidth="xl">
        <h1>Work Experience</h1>
        <Grid container spacing={2}>
          {experienceData.map((project) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card key={project.id} sx={{ maxWidth: 400 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>{project.jobTitle}</strong> @ {project.companyNamePortfolio}
                  </Typography>
                  <p className="medium">{project.description}</p>
                </CardContent>
                <CardActions>
                  <Button><Link to={`/experience/${project.id}`}>View Details</Link></Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
