import '../styles/NavBar.style.css'
import { useState } from 'react'

export const NavBar = () => {

    const [ dropDown, setdropDown ] = useState(false)

    return(
        <nav>
            <div className="nav-container">
                <div className="name">
                    <h1>GitClick</h1>
                </div>

                <div className='desktop-nav'>
                    <div className="desktop-links">
                        <a href='#'>GitClick Client</a>
                        <a href='#'>Pricing</a>
                        <a href='#'>About</a>
                    </div>
                    <div className="desktop-nav-button">
                        <button type="button">Try Free</button>
                    </div>
                </div>

                <div className='hamburger-menu' onClick={() => {
                    setdropDown(!dropDown)
                }}>
                    <img src={require("../images/menu-bar.png")} alt='' />
                </div>

               {dropDown && <DropDownContent />}
                
            </div>
        </nav>
    )
}

const DropDownContent = () => {
    return(
        <div className='drop-down-container' id='drop-down'>
            <div className="nav-links-container">
                <a href='#'>GitClick Client</a>
                <a href='#'>Pricing</a>
                <a href='#'>About</a>
            </div>
            <div className="nav-button">
                <button type="button">Try Free</button>
            </div>
        </div>
    )
}