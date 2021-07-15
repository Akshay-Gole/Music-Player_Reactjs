import React,{ useEffect } from 'react'
// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons'
// Importing playAudio 
import { playAudio } from '../util'



function Player({setCurrentSong,currentSong, playing, setPlaying, audioRef,currentTime, setCurrentTime, duration, songs,setSongs }) {
    
    // useEffect for seting the active color on lib when we change song through skip buttons
    useEffect( ()=>{
        // to set the color on active song, here we update the state of songs.
        const activeSong = songs.map(actSong =>{
            if(actSong.id === currentSong.id){
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
    },[currentSong])


    // Play event handler
    const playHandler=()=>{
        if(playing){
            audioRef.current.pause()
            setPlaying(!playing)
        }
        else{
            audioRef.current.play()
            setPlaying(!playing)
        }
    }

    // time convertor from sec to mins
    const timing=(time)=>{
        return (
            Math.floor(time/60) + ':' + ('0' + Math.floor(time%60)).slice(-2)
        )
    }

    

    // to change the the time in input range ( here currentTime is not a state it is a  value of audio element)
    const inputHandler=(e)=>{
        audioRef.current.currentTime = e.target.value
        setCurrentTime(e.target.value)

    }

    // to handler skip next and skip back
    const skipHandler=(direction)=>{
        const currentIndex = songs.findIndex((song) => song.id===currentSong.id)
        if(direction === 'skipNext'){
            setCurrentSong(songs[(currentIndex+1)% songs.length])
        }
        if(direction === 'skipBack'){
            if((currentIndex-1)% songs.length === -1){
                setCurrentSong(songs[songs.length - 1])
                playAudio(playing,audioRef)
                return
            }
            setCurrentSong(songs[(currentIndex-1)% songs.length])
        }
        playAudio(playing,audioRef)

    }

    return (
        <div className="player-comp">
            <div className="time-control"> 
            {/* Adding start time and ending time with range to  show the procress */}
                <p>{timing(currentTime)}</p>
                <input min={0} max={duration || 0} value={currentTime } onChange={inputHandler} type="range"/>
                <p>{duration ? timing(duration) : '0:00'}</p>
            </div>

            <div className="play-control">
            {/* adding icons for play/stop , next , previous     
            1->  in faplaya nd fapause we are using conditon if somg is playing then show different icon and 
            we are checking condition by playing state*/}
                <FontAwesomeIcon onClick={()=>skipHandler("skipBack")} className="skipBack-icon" icon={faAngleLeft} size='2x'/>
                <FontAwesomeIcon onClick={playHandler} className="play-icon" icon={playing ? faPause : faPlay} size='2x'/>
                <FontAwesomeIcon onClick={()=>skipHandler("skipNext")} className="skipNext-icon" icon={faAngleRight} size='2x'/>
            </div>

            
        </div>
    )
}

export default Player
