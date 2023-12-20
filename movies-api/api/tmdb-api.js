import fetch from 'node-fetch';

export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
  
  export const getMovie = async (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

  export const getMoviesByDecade = (startYear, endYear) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };
  
    
    export const getGenres = async () => {
      return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
          process.env.REACT_APP_TMDB_KEY +
          "&language=en-US"
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
    
    export const getMovieImages = async (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getUpcomingMovies = async () => {
      try {
          const response = await fetch(
              `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
          );
  
          if (!response.ok) {
              throw new Error(response.json().message);
          }
  
          return await response.json();
      } catch (error) {
          throw error;
      }
  };
  
    export const getMovieReviews = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then((res) => res.json())
        .then((json) => {
          // console.log(json.results);
          return json.results;
        });
    };
  
    export const getTrendingMovies = () => {
      return fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error;
      });
    };
  
    export const getTopRatedMovies = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    };
  
    export const getNowPlayingMovies = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    };
    
    export const getMovieActors = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    };

    export const getAlternativeTitles = (movieId) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/alternative_titles?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    };

    export const getReleaseDates = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    };
  
    export const getSimilarMovies = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch similar movies');
        }
        return response.json();
      })
      .catch(error => {
        console.error("Failed to fetch similar movies:", error);
        throw error;
      });
    };
  
    export const getActorMovieCredits = (actorId) => {
      return fetch(
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch actor movie credits');
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
    };

    export const getPopularActors = () => {
      return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch popular actors');
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
    };

    export const getKeywords = (movieId) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie keywords');
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
    };
  
    export const getActorDetails = (actorId) => {
      return fetch(
        `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch actor details');
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
    };