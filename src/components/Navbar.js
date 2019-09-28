import React from 'react'

function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li clclassNameass="nav-item">
                    <a className="nav-link active" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Devices</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                </ul>
        </div>
    )
}

export default Navbar
