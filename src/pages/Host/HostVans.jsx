import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function HostVans() {

    let [vans, setVans] = useState([]);

    useEffect(() => {
        try {
            fetch('/api/host/vans')
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data)
                    setVans(data.vans);
                })
        } catch (err) {
            console.log(err)
        }
    }, [])

    let HostVansItems = vans.map((van) => {
        return <Link to={`/host/vans/${van.id}`} key={van.id}
            className='host-van-link-wrapper' >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    })

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {HostVansItems}
                        </section>

                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}
