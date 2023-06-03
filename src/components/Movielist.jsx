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
        <section className='px-4 my-10'>
            <h2 className='py-10 text-6xl font-semibold text-red-500'>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className='flex flex-wrap justify-center' >
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
