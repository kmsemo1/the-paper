import React from 'react';
import "./Nav.css";

class NavBar extends React.Component {

// glyphicon from https://useiconic.com/open/

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <button type="button" className="btn btn-light">
                    <span className="oi oi-menu"></span>
                </button>

                <span className="oi oi-icon-name" title="icon name" aria-hidden="true"></span>
                <span className="navbar-brand mb-0 h1">Navbar</span>
            </nav>
        )
    }
}

export default NavBar;