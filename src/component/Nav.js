import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import ReactGa from 'react-ga'

function Nav({ setLibraryStatus, libraryStatus }) {

    const ClickHandler = () => {
        ReactGa.event({
            category: "Button",
            action: "Clicked the Lib button"
        })
    }

    return (
        <nav className='nav'>
            <h1>Mp3 Player</h1>
            <button onClick={() => {
                setLibraryStatus(!libraryStatus)
                ClickHandler()
            }}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav
