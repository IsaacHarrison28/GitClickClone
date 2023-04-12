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
                        <a href='https://github.com/IsaacHarrison28' target='_blank' rel="noreferrer">GitClick Client</a>
                        <a href='https://github.com/IsaacHarrison28' target='_blank' rel="noreferrer">Pricing</a>
                        <a href='https://github.com/IsaacHarrison28' target='_blank' rel="noreferrer">About</a>
                    </div>
                    <div className="desktop-nav-button">
                        <a href='https://github.com/IsaacHarrison28' target='_blank' rel="noreferrer">
                            <button type="button">Try Free</button>
                        </a>
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
                <a href='https://github.com/IsaacHarrison28' target='_blank' rel="noreferrer">GitClick Client</a>
                <a href='https://github.com/IsaacHarrison28' target='_blank' rel="noreferrer">Pricing</a>
                <a href='https://github.com/IsaacHarrison28' target='_blank' rel="noreferrer">About</a>
            </div>
            <div className="nav-button">
                <a href='https://github.com/IsaacHarrison28' target='_blank' rel="noreferrer">
                    <button type="button">Try Free</button>
                </a>
            </div>
        </div>
    )
}