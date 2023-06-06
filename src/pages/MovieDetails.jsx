import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=737e70d53383213111fd262835188b45&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    return (
        <section className='mt-28 mx-10 flex lg:flex-row-reverse flex-col mb-60'>
            <div className='px-4 my-2'>
                <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="movie.title" />
                <h2 className='text-2xl font-medium'>{currentMovieDetail ? currentMovieDetail.original_title : ''}</h2>
                <p className='text-xl font-medium italics'>Tagline: {currentMovieDetail ? currentMovieDetail.tagline : ''}</p>
            </div>
            <section className='lg:w-2/3'>
                <div className='pb-2'>
                    <h3 className='text-2xl text-center py-1 border-2 border-solid border-gray-100'>Synopsis</h3>
                    <p className='mt-2 italic'>{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
                </div>
                <div className='mt-6'>
                    <h3 className='text-2xl text-center py-1 border-2 border-solid border-gray-100 mb-1'>Useful Links</h3>
                    <div className='flex flex-col'>
                        {currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" rel="noreferrer"><p><span>Homepage <i className="fas fa-external-link-alt"></i></span></p></a>}
                        {
                            currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" rel="noreferrer"><p><span>IMDb<i className="fas fa-external-link-alt"></i></span></p></a>
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MovieDetails
