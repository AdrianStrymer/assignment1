import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PopularActorCard from '../components/popularActorCard';
import { getPopularActors } from '../api/frontend-api';
import Grid from '@mui/material/Grid';

const PopularActorsPage = () => {
  const { data, isLoading, isError, error } = useQuery('popularActors', getPopularActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Popular Actors</h1>
      <h2>These are the currently popular and trending actors:</h2>
      <Grid container spacing={2}>
        {data.results.map((actor) => (
          <PopularActorCard key={actor.id} actor={actor} />
        ))}
      </Grid>
    </div>
  );
};

export default PopularActorsPage;