import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingPage";
import ActorMoviesPage from "./pages/actorMoviesPage";
import MoviesByDecadePage from "./pages/moviesByDecadePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProtectedRoutes from "./protectedRoutes";
import AuthContextProvider from "./contexts/authContext";
import PopularActorsPage from "./pages/popularActorsPage";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={ <SignUpPage /> } />
        <Route element={<ProtectedRoutes />}>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/trending" element={<TrendingMoviesPage />} />
          <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
          <Route path="/movies/nowPlaying" element={<NowPlayingMoviesPage />} />
          <Route path="/movies/moviesByDecade" element={<MoviesByDecadePage />} />
          <Route path="/movies/popularActors" element={<PopularActorsPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/actors/:actorId/movies" element={<ActorMoviesPage />} />
        </Route>
        </Routes>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};



const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);

