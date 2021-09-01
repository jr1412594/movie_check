import React from 'react'

export default function TvCard({ tvShow }) {
    console.log(tvShow, 'in my tvCard')
    return (
        <div>
            <h1>{ tvShow.name }</h1>
            <img src={ tvShow.image.medium } alt={ tvShow.id }/>
        </div>
    )
}
