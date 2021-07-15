import React from 'react'

function Song({currentSong}) {
    // displaying picture, song name, artist
    return (
        <div className="song-comp">
            <img src={currentSong.cover} alt=""/>
            <h1>{currentSong.name}</h1>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song
