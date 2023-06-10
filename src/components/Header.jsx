import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className='flex justify-between items-center h-20 text-3xl py-2 px-10 bg-[#030303] text-[#e7e9ea] fixed top-0 z-10 w-full'>
            <Link to='/'>
                PrePlex
            </Link>
            <div className="flex items-center px-4 italic text-[#126096]">
                <Link to='/movies/popular'>Popular</Link>
                <Link to='/movies/top_rated' className="px-8">Elite</Link>
                <Link to='/movies/upcoming'>Upcoming</Link>
            </div>
        </section>
    )
}

export default Header
