import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Nav({setLibraryStatus, libraryStatus}) {
    return (
        <nav className='nav'>
            <h1>Mp3 Player</h1>
            <button onClick={()=>setLibraryStatus(!libraryStatus)}>
                Library 
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav
