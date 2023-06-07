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
                    <div className='bg-[#202020] inline-block relative transition-transform duration-200 rounded-xl overflow-hidden m-1 cursor-pointer z-0 hover:z-50 min-w-[200px] h-72 border-2 border-solid border-white'>
                        <SkeletonTheme highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={`/movie/${movie.id}`}>
                        {/* <div className='inline-block relative overflow-hidden cursor-pointer z-0 border-2'> */}
                        <div className='inline-block relative transition-transform duration-200 rounded-xl overflow-hidden m-1 cursor-pointer z-0 hover:z-50 min-w-[200px] h-72 border-2 border-solid border-white'>
                            <img className="h-80" alt={movie.original_title} src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                            <div className=' px-2 pb-1 bg-[linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1)] absolute bottom-0 w-10/12 h-24 flex flex-col justify-end opacity-0 transition-opacity duration-200 hover:opacity-100'>
                                <h2 className='text-xl font-bold'>{movie ? movie.original_title : ''}</h2>
                                <div className='text-red-600 font-semibold'>
                                    {movie ? movie.release_date : ''}
                                    <span className='px-2'>
                                        {movie ? movie.vote_average : ''}
                                        <i className='fas fa-star' />
                                    </span>
                                </div>
                                <p className='italic'>
                                    {movie ? movie.overview.slice(0, 120) + "..." : ''}
                                </p>
                            </div>
                        </div>
                    </Link>
            }
        </div>
    )
}

export default Card
