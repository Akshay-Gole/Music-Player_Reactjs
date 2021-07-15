import React from 'react'
// importing componet
import LibraryList from './LibraryList'



// This function displays the list of all the songs.
// It gets list of songs and then by map function we pass each song individually into LibraryList component
function Library({songs, setCurrentSong, audioRef, playing, setSongs,libraryStatus}) {
    return (
        <div className={`library-comp ${libraryStatus ? 'active-library' : ''}`}>
            <h1>Library</h1>
            <div className="Library-list">
                {songs.map(song =>
                    <LibraryList song={song} playing={playing} setCurrentSong={setCurrentSong}
                     audioRef={audioRef} key={song.id}
                     songs={songs} setSongs={setSongs}/>
                )}
            </div>
        </div>
    )
}
export default Library