import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';


function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [sortByPopularity, setSortByPopularity] = useState(false);
  const [overviewFilter, setOverviewFilter] = useState("");
  const genreId = Number(genreFilter);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11; 

  let filteredMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return ratingFilter ? parseFloat(m.vote_average) >= parseFloat(ratingFilter) : true;
    })
    .filter((m) => {
      return overviewFilter ? m.overview.toLowerCase().includes(overviewFilter.toLowerCase()) : true;
    });
    
    
    if (sortAlphabetically) {
      filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortByPopularity) {
      filteredMovies.sort((a, b) => b.popularity - a.popularity);
    }

    const firstItemIndex = (currentPage - 1) * itemsPerPage;
    const displayedMovies = filteredMovies.slice(firstItemIndex, firstItemIndex + itemsPerPage);

    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };

  const handleChange = (type, value) => {
    setCurrentPage(1);
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "rating") setRatingFilter(value);
    else if (type === "sortAlphabetically") setSortAlphabetically(value);
    else if (type === "sortByPopularity") setSortByPopularity(value);
    else if (type === "overview") setOverviewFilter(value);
  };


  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            ratingFilter={ratingFilter}
            overviewFilter={overviewFilter}
            sortAlphabetically={sortAlphabetically}
            sortByPopularity={sortByPopularity}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies} />
      </Grid>
      <Grid item xs={20} display="flex" justifyContent="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(filteredMovies.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '1.5rem', 
            }
          }}
        />
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;