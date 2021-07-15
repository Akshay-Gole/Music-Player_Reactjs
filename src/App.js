import React, {useRef, useState} from 'react'
// adding components
import Song from './component/song'
import Player from './component/player'
import Library from './component/library'
import Nav from './component/Nav'
// import styles
import './styles/app.scss'
//  importing music's from util
import Music from './data'

function App() {
  // here Music() will return the list of objects which have all data 
  const [songs,setSongs]= useState(Music())
  
  // here song[0] shows the song for the very first time
  const [currentSong,setCurrentSong]=useState(songs[0])

  // for pasue and replay the song
  const [playing,setPlaying] = useState(false)

  // state for showing the time of the song
  const [currentTime,setCurrentTime] = useState(0)

  // state for showing the time of the song 
  const [duration, setDuration]= useState(0)

  // State for library button, Is it open or not open
  const [libraryStatus,setLibraryStatus]= useState(false)

  // using ref for getting the audio HTML element
  const audioRef= useRef()

  // Time and duration event handler ( here currentTime andf Duration are not states they are values of audio element)
  const timeHandler = (e)=>{
    setCurrentTime(e.target.currentTime)
    setDuration(e.target.duration)
}
  const endHandler =async ()=>{
    const currentIndex = songs.findIndex((song)=> song.id===currentSong.id)
    await setCurrentSong(songs[(currentIndex +1)% songs.length])
    if(playing){
      audioRef.current.play()
    }
  }
  
  return (
    <div className={`App ${libraryStatus ? 'move-right' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>

      <Player currentTime={currentTime} setCurrentTime={setCurrentTime} duration={duration}  
        playing={playing} setPlaying={setPlaying} 
        currentSong={currentSong} audioRef={audioRef}
        songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} currentSong={currentSong}/>

      <Library libraryStatus={libraryStatus} playing={playing} setCurrentSong={setCurrentSong} audioRef={audioRef} songs={songs} setSongs={setSongs}/>

      {/* Audio player */}
      <audio onTimeUpdate={timeHandler} onLoadedMetadata={timeHandler} ref ={audioRef} src={currentSong.audio} onEnded={endHandler} ></audio>
    </div>
  );
}

export default App;
