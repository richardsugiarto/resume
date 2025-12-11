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
                <h1>Thesis</h1>
                <Grid container spacing={2}>
                    {thesisData.map((thesis) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card key={thesis.id} sx={{ maxWidth: 400 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={thesis.coverImage}
                                    title={thesis.description}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <strong>{thesis.title}</strong>
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
