import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

const Card = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return (
        <div className='px-2 py-4'>
            {
                isLoading
                    ?
                    <div>
                        <SkeletonTheme>
                            <Skeleton height={300} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={`/movie/${movie.id}`}>
                        <div className='inline-block relative overflow-hidden cursor-pointer z-0 border-2'>
                            <img className="h-80" alt={movie.original_title} src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                            <div className='bg-[linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1)] absolute bottom-0 w-10/12 h-24 flex flex-col justify-end opacity-0 transition-opacity duration-200 hover:opacity-100'>
                                <h2>{movie ? movie.original_title : ''}</h2>
                                <div className='text-red-600'>
                                    {movie ? movie.release_date : ''}
                                    <span>
                                        {movie ? movie.vote_average : ''}
                                        <i className='fas fa-star' />
                                    </span>
                                </div>
                                <div>
                                    {movie ? movie.overview.slice(0, 120) + "..." : ''}
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </div>
    )
}

export default Card
