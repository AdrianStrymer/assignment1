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

export const getPopularActors = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/popular', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getKeywords = async (movieId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${movieId}/keywords`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};