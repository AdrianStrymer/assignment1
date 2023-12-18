import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/frontend-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieActors from "../components/movieActors";
import SimilarMovies from "../components/similarMovies";
import AlternativeTitles from "../components/alternativeTitles";
import ReleaseDates from "../components/releaseDates";

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <ReleaseDates movieId={id} />
            <SimilarMovies movieId={id} />
            <MovieActors movieId={id} />
            <AlternativeTitles movieId={id} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;