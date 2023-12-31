import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/frontend-api"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { MoviesContext } from "../contexts/moviesContext";


const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "upcomingMovies",
    getUpcomingMovies
  );
  
  const { addToMustWatch } = useContext(MoviesContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  
  const movies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return (
          <>
            <PlaylistAddIcon
              movie={movie}
              onClick={() => addToMustWatch(movie)} 
            />
          </>
        );
      }}
    />
  );
};
export default UpcomingMoviesPage;