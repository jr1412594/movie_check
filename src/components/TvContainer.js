import React from 'react';
import TvCard from './TvCard';


export default function TvContainer({ tvShows }) {
    console.log(tvShows,"in my TVContainer")

    const displayTvShows = () => {
        return tvShows.map(tvShow => (
            <TvCard tvShow={ tvShow } key={ tvShow.id } />
        ))
    }

    return (
        <div>
            Hello!
            { displayTvShows() }
        </div>
    )
}
