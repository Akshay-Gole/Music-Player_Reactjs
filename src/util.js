export const playAudio=(playing,audioRef)=>{
    if(playing){
        //  store the result of invoking audioRef.current.play(), 
        // and only act on it as a Promise chain if the result turns out to be non-undefined (eg. of type object).
        // stackoverflow :- https://stackoverflow.com/questions/41293245/html5-video-play-returning-pending-promises/47223508
        // Google web : https://developers.google.com/web/updates/2016/03/play-returns-promise
        const playPromise = audioRef.current.play()
        console.log(playPromise,"  (1)  ")
        if(playPromise !==undefined ){
            playPromise.then((res)=>{
                console.log(playPromise,'  (2)  ')
                audioRef.current.play()
            })
        }
    }
}