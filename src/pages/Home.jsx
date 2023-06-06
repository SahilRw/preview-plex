import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Movielist from "../components/Movielist"

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        // fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=737e70d53383213111fd262835188b45&language=en-US`)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <section className='absolute top-28'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
                className='mx-8'
                emulateTouch={true}
            >
                {
                    popularMovies.map(movie => (
                        <Link key={movie.id} to={`/movie/${movie.id}`}>
                            <div className='lg:h-3/4 lg:w-3/4 mx-auto'>
                                <img className='' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movie.original_title" />
                            </div>
                            <div className='flex flex-col lg:items-center text-left absolute bottom-0 w-full lg:w-1/3 px-4 pb-8 opacity-0 hover:opacity-100 lg:inset-x-1/3 lg:text-center'>
                                <h2 className='text-4xl font-bold'>{movie ? movie.original_title : ''}</h2>
                                <div className='text-red-600'>
                                    {movie ? movie.release_date : ''}
                                    <span className='px-2'>
                                        {movie ? movie.vote_average : ''}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <p className='text-xl text-[#fff] italic'>
                                    {movie ? movie.overview : ''}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </Carousel >
            <Movielist />
        </section>
    )
}

export default Home
