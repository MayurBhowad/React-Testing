import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div ClassName='navbar'>
                <div className="logo">LOGO</div>
                <ul className="nav-list">
                    <li className="list-item"><a href="#" className="item">Home</a></li>
                    <li className="list-item"><a href="#" className="item">About</a></li>
                    <li className="list-item"><a href="#" className="item">Contact</a></li>
                    <li className="list-item"><a href="#" className="item">Login</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
