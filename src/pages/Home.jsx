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
        <>
            <div className=''>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link key={movie.id} to={`/movie/${movie.id}`}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movie.original_title" />
                                </div>
                                <div>
                                    <div>{movie ? movie.original_title : ''}</div>
                                    <div>
                                        {movie ? movie.release_date : ''}
                                        <span>
                                            {movie ? movie.vote_average : ''}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div>
                                        {movie ? movie.overview : ''}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel >


                <Movielist />
            </div >
        </>
    )
}

export default Home
