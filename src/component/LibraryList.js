import React from 'react'
// Importing playAudio 
import { playAudio } from '../util'



// this Component hold the info about songs
function LibraryList({song, setCurrentSong, audioRef,playing,setSongs , songs }) {
    const songChangeHandler=()=>{
        // to set the color on active song, here we update the state of songs.
        const activeSong = songs.map(actSong =>{
            if(actSong.id === song.id){
                return (
                    {
                        ...actSong,
                        active:true
                    }
                )
            }
            else{
                return (
                    {
                        ...actSong,
                        active:false
                    }
                ) 
            }
        })

        setSongs(activeSong)
        
        setCurrentSong(song)
        
        playAudio(playing,audioRef)
        
        
    }
    return (
        <div onClick={songChangeHandler} className={`libList-comp ${song.active ? 'select' : ''}`}> 
            <img src={song.cover} alt={song.name}/>
        
            <div className="libList-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
            
        </div>
    )
}

export default LibraryList
