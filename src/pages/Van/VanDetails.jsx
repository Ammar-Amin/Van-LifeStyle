import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function VanDetails() {
    let { id } = useParams()

    let [van, setVan] = useState({})

    function fetchVan() {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVan(data.vans)
            })
    }

    useEffect(() => {
        fetchVan()
    }, [id])

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img alt={van.name} src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )


}
