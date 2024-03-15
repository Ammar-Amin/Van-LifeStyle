import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function VanDetail() {
    return (
        <div className='host-van-detail-route'>
            <NavLink to='details'>Details</NavLink>
            <NavLink to='pricing'>Pricing</NavLink>
            <NavLink to='photos'>Photo</NavLink>
        </div>
    )
}
