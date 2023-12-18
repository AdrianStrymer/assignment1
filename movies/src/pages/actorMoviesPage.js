import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getActorDetails, getActorMovieCredits } from '../api/frontend-api';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';


const ActorMoviesPage = () => {
  const { actorId } = useParams();
  const { data: actorData, isLoading: isLoadingActor, isError: isErrorActor, error: actorError } = useQuery(
    ['actor', actorId],
    () => getActorDetails(actorId)
  );
  const { data: moviesData, isLoading: isLoadingMovies, isError: isErrorMovies, error: moviesError} = useQuery(
    ['actorMovies', actorId],
    () => getActorMovieCredits(actorId)
  );
  
  if (isLoadingActor || isLoadingMovies) {
    return <Spinner />;
  }

  if (isErrorActor) {
    return <h1>{actorError.message}</h1>;
  }

  if (isErrorMovies) {
    return <h1>{moviesError.message}</h1>;
  }

  return (
    <PageTemplate
      title={`${actorData.name}'s Movies`}
      movies={moviesData.cast}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};

export default ActorMoviesPage;