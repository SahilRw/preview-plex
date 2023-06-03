import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'

const Movielist = () => {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=737e70d53383213111fd262835188b45&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    return (
        <section>
            <h2>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div>
                {
                    movieList.map(movie => (
                        <Card movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default Movielist
