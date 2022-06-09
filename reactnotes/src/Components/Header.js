import React from 'react';

const Header= ({handleToggleDarkMode}) => {
    return(
        <div className="Header">
            <h1> Notes</h1>
            <button onClick={() => handleToggleDarkMode(
                (previousDarkMode) => !previousDarkMode)}              
             className='toggleButton'> <b>Toggle Mode</b> </button>
        </div>
    )
}




export default Header;