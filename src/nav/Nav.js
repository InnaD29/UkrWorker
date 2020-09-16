import React from 'react';
import './Nav.css'

export default class Nav extends React.Component {
    render() {
        return (
            <div className="header-nav">
            <div className="container">
                <nav className="navbar navbar-expand-sm ">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item active"><a href="#" className="nav-link">Exchange offices</a></li>
                        <li className="nav-item active"><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
            </div>
        )
    }
}