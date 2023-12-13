# Assignment 1 - ReactJS app.

Name: Adrian Strymer

## Overview.

This repository contains code for a movies web app which uses react and the TMDB database to showcase certain information about movies and actors to the user.

### Features.
+ Three new pages showcasing trending, top rated and currently playing movies
+ After clicking on the movie details the main cast and similar movies can be seen
+ Clicking show movies on the actor card will show all of the actor's movies
+ Caching with react query done on all endpoints
+ New filtering option added that allows the user to filter by a minimum rating
+ New search option added which allows the user to search the movie overview for specific key words
+ New sorting options allow the user to sort the movies alphabetically or by popularity
+ An actor card was made to showcase the main cast of the movies
+ Pagination that displays 11 movies per page
+ A new page which allows the user to choose a decade and shows 8 random movies from that decade

## API endpoints.
+ Trending movies - /trending/movie/day
+ Top rated movies - /movie/top_rated
+ Now playing movies - /movie/now_playing
+ Movie Cast - /movie/${id}/credits
+ Similar movies - /movie/${id}/similar
+ Actor's movies - /person/${actorId}/movie_credits
+ Actor's name - /person/${actorId}

## Routing.
+ /movies/trending - displays the trending movies
+ /movies/topRated - dipslays the top rated movies
+ /movies/nowPlaying - displays the movies that are currently playing
+ /movies/moviesByDecade - displays the 8 random movies from the chosen decade
+ /actors/:actorId/movies - displays the movies of a specific actor

## Independent learning.
Reference for pagination:
https://www.makeuseof.com/react-pagination-using-reactpaginate-library/
