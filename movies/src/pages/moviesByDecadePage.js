import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getMoviesByDecade } from '../api/tmdb-api';
import Spinner from '../components/spinner';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MovieCard from '../components/movieCard';
import { Grid } from '@mui/material';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const MoviesByDecadePage = () => {
    const [selectedDecade, setSelectedDecade] = useState('');

    const { data: movies, isLoading, error } = useQuery(
        ['moviesByDecade', selectedDecade],
        () => getMoviesByDecade(selectedDecade, selectedDecade + 9),
        {
            enabled: !!selectedDecade 
        }
    );

    const randomizeMovies = (movies) => {
        return [...movies].sort(() => 0.5 - Math.random()).slice(0, 8);
    };

    const handleDecadeChange = (event) => {
        setSelectedDecade(event.target.value);
    };

    if (isLoading) return <Spinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>View random movies from different decades</h1>
            <FormControl fullWidth>
                <InputLabel id="decade-select-label">Select a Decade</InputLabel>
                <Select
                    labelId="decade-select-label"
                    id="decade-select"
                    value={selectedDecade}
                    label="Select a Decade"
                    onChange={handleDecadeChange}
                >
                    {[1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010].map(decade => (
                        <MenuItem key={decade} value={decade}>{decade}s</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {movies && (
                <Grid container spacing={2}>
                    {randomizeMovies(movies.results).map((movie) => (
                        <Grid item xs={3} key={movie.id}>
                            <MovieCard movie={movie} />
                            <AddToFavoritesIcon movie={movie}/>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default MoviesByDecadePage;