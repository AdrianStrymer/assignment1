import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const PopularActorCard = ({ actor}) => {
  const navigate = useNavigate();
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500';

  const showActorMovies = () => {
    navigate(`/actors/${actor.id}/movies`);
  };
  
  return (
    <Grid item xs={2.5}>
      <Card sx={{ maxWidth: 1000}}>
        <CardMedia
          component="img"
          height="280"
          image={actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : 'path_to_default_image'}
          alt={actor.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {actor.name}
          </Typography>
        </CardContent>
        <Button onClick={showActorMovies}>
          Show Movies
        </Button>
      </Card>
    </Grid>
  );
};

export default PopularActorCard;