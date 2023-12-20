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

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Assignment 2 - Web API.

Name: Adrian Strymer

## Features.

 + Added alternative titles to movie details
 + Added release dates for english speaking countries to movie details
 + Added movie keywords to movie details 
 + Added a new page which displays the currently popular actors
 + Added new password validation which checks if there are 3 or more consecutive characters in a password
 + Added username validation which specifies that usernames have to be from 3 to 15 characters long and only be composed of letters and numbers
 + Error messages are displayed on the frontend when username or password validation fails

## API Configuration

Before running the API a .env file has to be created in the movies-api folder and the following variables have to be input into it.
______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
REACT_APP_TMDB_KEY=YourTMDBKey
secret=YourJWTSecret
______________________

## API Design

- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies
- /api/movies/tmdb/genres | GET | Gets the genres
- /api/movies/tmdb/discover | GET | Get a list of movies 
- /api/movies/tmdb/movie/:id | GET | Gets the details of a movie
- /api/movies/tmdb/decade | GET | Gets the movies by decade
- /api/movies/tmdb/movie/:id/images | GET | Gets the images related to a movie
- /api/movies/tmdb/movie/:id/reviews | GET | Gets the reviews for a movie
- /api/movies/tmdb/trending | GET | Gets a list of trending movies
- /api/movies/tmdb/toprated | GET | Gets a list of the top rated movies
- /api/movies/tmdb/nowplaying | GET | Gets a list of the now playing movies
- /api/movies/tmdb/movie/:id/actors | GET | Gets the actors of a movie
- /api/movies/tmdb/:id/similar | GET | Gets movies that are similar to the movie
- /api/movies/tmdb/actors/:actorId/moviecredits | GET | Gets the movie credits of an actor
- /api/movies/tmdb/actors/:actorId/details | GET | Gets the details of an actor
- /api/movies/tmdb/movie/:movieId/alttitles | GET | Gets the alternative titles of a movie
- /api/movies/tmdb/movie/:id/releasedates | GET | Gets the release dates of the movie in different countries
- /api/movies/tmdb/popular | GET | Gets the currently popular actors
- /api/movies/tmdb/movie/:movieId/keywords | GET | Gets the keywords for a movie
- /api/users | POST | Logs the user in
- /api/users?action=register | POST | Signs the user up for the platform

## Security and Authentication

When a request is made to the API, the authenticate middleware checks for an authorization header in the request which requires a JWT token. This token is used to authenticate the user. The JWT token is then decoded using a secret key. This process validates the token's integrity and ensures it hasn't been tampered with. If these steps are unsuccessful, an error is thrown which prevents unauthorized access.

The passwords are hashed and the plaintext passwords are replaced in the document by these hashed passwords.

The routes that are protected are:
+ /movies/favorites - Page showing the users favourite movies
+ /movies/upcoming - Page showing upcoming movies
+ /movies/trending - Page showing trending movies
+ /movies/topRated - Page showing the top rated movies
+ /movies/nowPlaying - Page showing the currently playing movies
+ /movies/moviesByDecade - Page that allows you to pick a decade and you get shown 8 random movies from that decade
+ /movies/popularActors - Page showing the currently popular actors
+ /reviews/:id - Shows the reviews for a movie
+ /movies/:id - Shows the details about the movie
+ / - Home page
+ * - Redirects users to home page
+ /reviews/form - Form to write a review
+ /actors/:actorId/movies - Page showing all the movie credits of an actor

These routes are not protected as the user has to be able to access the login and signup page before logging in:
+ /login
+ /signup

## Integrating with React App

The functions in the frontend-api file makes a GET request to the backend server at given endpoint. This request includes an authorization header containing a JWT token which is retrieved from local storage. This token is used for user authentication.

The backend routes in /movies/index listens for requests at the given enpoint. When a request is received, it calls the backend's functions.

The backend's functions make external API requests to TMDB's endpoints. It fetches the data and returns it in response to the original request from the frontend.
