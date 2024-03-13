import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Vans() {
    let [data, setData] = useState([])

    function fetchVans() {
        fetch('/api/vans')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.vans)
                setData(data.vans)
            })
    }

    useEffect(() => {
        fetchVans();
    }, [])

    return (
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list">
                    {
                        data && data.length !== 0
                            ? data.map((van) => (
                                <div key={van.id} className="van-tile">
                                    <Link to={van.id} key={van.id} >
                                        <img alt={van.name} src={van.imageUrl} />
                                        <div className="van-info">
                                            <h3>{van.name}</h3>
                                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                                            <p>${van.price}<span>/day</span></p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default Vans
