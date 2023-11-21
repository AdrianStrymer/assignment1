import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import ActorCard from '../actorCard';
import { getMovieActors } from '../../api/tmdb-api';
import Grid from '@mui/material/Grid';

const MovieActors = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['actors', movieId],
    () => getMovieActors(movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      <h2>Main Cast</h2>
      <Grid container>
        {data.cast.slice(0, 8).map((actor) => (
          <ActorCard key={actor.id} actor={actor}/>
        ))}
      </Grid>
    </div>
  );
};

export default MovieActors;