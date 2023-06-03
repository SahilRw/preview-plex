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
        <section>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="" />
            </div>
            <section>
                <div>
                    <h3>Synopsis</h3>
                    <p>{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
                </div>
            </section>
            <div>
                <h3>Useful Links</h3>
                {currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" rel="noreferrer"><p><span>Homepage <i className="fas fa-external-link-alt"></i></span></p></a>}
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" rel="noreferrer"><p><span>IMDb<i className="fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
        </section>
    )
}

export default MovieDetails
