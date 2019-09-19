import React from 'react';
import './App.css';
import artists from './Store';
 function Artists() {
    return (
        <>
            <h1>MTV Base Headline Artists 2019</h1>
            {artists.map((artist, i) => (
                <div id='card-body' key={i}>
                    <div className='card'>
                        <h2>{artist.name}</h2>
                        <p>genre: {artist.genre}</p>
                        <p>Albums released: {artist.albums}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
export default Artists;