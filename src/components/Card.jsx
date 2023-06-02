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
        <div>
            {
                isLoading
                    ?
                    <div>
                        <SkeletonTheme>
                            <Skeleton height={300} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={`movie/${movie.id}`}>
                        <div>
                            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                            <div>
                                <div>{movie ? movie.original_title : ''}</div>
                                <div>
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
