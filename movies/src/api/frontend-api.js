// export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };
  
// export const getMovie = (args) => {
//   // console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getMoviesByDecade = (startYear, endYear) => {
//   return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error('There has been a problem with your fetch operation:', error);
//     });
// };

  
//   export const getGenres = async () => {
//     return fetch(
//       "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//         process.env.REACT_APP_TMDB_KEY +
//         "&language=en-US"
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };
  
//   export const getMovieImages = ({ queryKey }) => {
//     const [, idPart] = queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
  
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getUpcomingMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     )
//      .then((res) => res.json())
//      .then((json) => ({ results: json.results }));
//   };

//   export const getMovieReviews = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         // console.log(json.results);
//         return json.results;
//       });
//   };

//   export const getTrendingMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//        throw error;
//     });
//   };

//   export const getTopRatedMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };

//   export const getNowPlayingMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };
  
//   export const getMovieActors = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };

//   export const getSimilarMovies = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     ).then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch similar movies');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error("Failed to fetch similar movies:", error);
//       throw error;
//     });
//   };

//   export const getActorMovieCredits = (actorId) => {
//     return fetch(
//       `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch actor movie credits');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       throw error;
//     });
//   };

//   export const getActorDetails = (actorId) => {
//     return fetch(
//       `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch actor details');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       throw error;
//     });
//   };

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const getTopRatedMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/toprated', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};


export const getNowPlayingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/nowplaying', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovieActors = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/actors`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getSimilarMovies = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/${id}/similar`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getActorMovieCredits = async (actorId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/actors/${actorId}/moviecredits`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getAlternativeTitles = async (movieId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${movieId}/alttitles`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getActorDetails = async (actorId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/actors/${actorId}/details`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genres', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovieImages = async ({queryKey}) => {
  const [, idPart] = queryKey;
  const  { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/images`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};


export const getUpcomingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovieReviews = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/reviews`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getTrendingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/trending', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/discover', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovie = async ({ queryKey }) => {
  const [, idPart] = queryKey;
  const  { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMoviesByDecade = async (startYear, endYear) => {
  const response = await fetch(
  `http://localhost:8080/api/movies/tmdb/decade?startYear=${startYear}&endYear=${endYear}`, {
  headers: {
    'Authorization': window.localStorage.getItem("token")
  },
  method: 'get'
}
)
return response.json();
};

export const getReleaseDates = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/releasedates`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};





  
  