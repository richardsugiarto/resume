import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Grid, Container, Typography } from "@mui/material";
import thesisData from "../data/thesis";

export default function ThesisPage() {
    return (
        <div className="myContainer">
            <Container maxWidth="xl">
                <h1>Thesis Portfolio</h1>
                <Grid container spacing={2}>
                    {thesisData.map((thesis) => (
                        <Grid key={thesis.id} item xs={12} sm={6} md={6}>
                            <Card key={thesis.id} sx={{ maxWidth: 900 }}>
                                <CardMedia
                                    sx={{ height: 250 }}
                                    image={thesis.coverImage}
                                    title={thesis.description}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        <h2>{thesis.degree}</h2>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <h3>{thesis.title}</h3>
                                    </Typography>
                                    <p className="medium">{thesis.description}</p>
                                </CardContent>
                                <CardActions>
                                    <Button><Link to={`/thesis/${thesis.id}`}>View Details</Link></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
