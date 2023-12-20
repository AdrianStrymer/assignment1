import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getUpcomingMovies, getMovies, getGenres, getMovie, getMoviesByDecade, getMovieImages, getMovieReviews, getTrendingMovies, getTopRatedMovies,
    getNowPlayingMovies, getMovieActors, getSimilarMovies, getActorMovieCredits, getActorDetails, getAlternativeTitles, getReleaseDates, getPopularActors, getKeywords} from '../tmdb-api';


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));


router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/discover', asyncHandler(async (req, res) => {
    const movies = await getMovies(); 
    res.status(200).json(movies);
}));


router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const movie = await getMovie(req.params.id);
    res.status(200).json(movie);
}));


router.get('/tmdb/decade', asyncHandler(async (req, res) => {
    const { startYear, endYear } = req.query;
    const movies = await getMoviesByDecade(startYear, endYear);
    res.status(200).json(movies);
}));

router.get('/tmdb/movie/:id/images', asyncHandler(async (req, res) => {
    const images = await getMovieImages(req.params.id);
    res.status(200).json(images);
}));

router.get('/tmdb/movie/:id/reviews', asyncHandler(async (req, res) => {
    const reviews = await getMovieReviews(req.params.id);
    res.status(200).json(reviews);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrendingMovies();
    res.status(200).json(trendingMovies);
}));

router.get('/tmdb/toprated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));


router.get('/tmdb/nowplaying', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));

router.get('/tmdb/movie/:id/actors', asyncHandler(async (req, res) => {
    const actors = await getMovieActors(req.params.id);
    res.status(200).json(actors);
}));

router.get('/tmdb/:id/similar', asyncHandler(async (req, res) => {
    const similarMovies = await getSimilarMovies(req.params.id);
    res.status(200).json(similarMovies);
}));

router.get('/tmdb/actors/:actorId/moviecredits', asyncHandler(async (req, res) => {
    const movieCredits = await getActorMovieCredits(req.params.actorId);
    res.status(200).json(movieCredits);
}));

router.get('/tmdb/actors/:actorId/details', asyncHandler(async (req, res) => {
    const actorDetails = await getActorDetails(req.params.actorId);
    res.status(200).json(actorDetails);
}));

router.get('/tmdb/movie/:movieId/alttitles', asyncHandler(async (req, res) => {
    const alternativeTitles = await getAlternativeTitles(req.params.movieId);
    res.status(200).json(alternativeTitles);
}));

router.get('/tmdb/movie/:id/releasedates', asyncHandler(async (req, res) => {
    const releaseDates = await getReleaseDates(req.params.id);
    res.status(200).json(releaseDates);
}));

router.get('/tmdb/popular', asyncHandler(async (req, res) => {
    const popularactors = await getPopularActors();
    res.status(200).json(popularactors);
}));

router.get('/tmdb/movie/:movieId/keywords', asyncHandler(async (req, res) => {
    const keywords = await getKeywords(req.params.movieId);
    res.status(200).json(keywords);
}));

export default router;