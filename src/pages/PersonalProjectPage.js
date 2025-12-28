import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Grid, Container, Typography } from "@mui/material";
import pprojectData from "../data/pproject";

export default function PersonalProjectPage() {
    return (
        <div className="myContainer">
            <Container maxWidth="xl">
                <h1>Personal Projects</h1>
                <Grid container spacing={2}>
                    {pprojectData.map((project) => (
                        <Grid key={project.id} item xs={12} sm={6} md={4}>
                            <Card key={project.id} sx={{ maxWidth: 900 }}>
                                <CardMedia
                                    sx={{ height: 250 }}
                                    image={project.coverImage}
                                    title={project.description}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        <h2>{project.degree}</h2>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <h3>{project.title}</h3>
                                    </Typography>
                                    <p className="medium">{project.description}</p>
                                </CardContent>
                                <CardActions>
                                    <Button><Link to={`/pproject/${project.id}`}>View Details</Link></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
