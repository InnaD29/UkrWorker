import React from 'react';
import './Header.css'
import Nav from '../nav/Nav.js'

export default class Header extends React.Component {
    constructor (props) {
        super();
    }
    render () {
        return (
            <div className="site">
                <header>
                    <div className="top-bar animate-dropdown"></div>
                    <div className="main-header">
                        <div className="container">
                            <h1 className="site-title">Exchange.ua</h1>
                        </div>
                    </div>
                <Nav/>
            </header>
        </div>
        )
    }
}