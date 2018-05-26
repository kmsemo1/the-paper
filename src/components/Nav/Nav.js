import React from 'react';
// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';
import "./Nav.css";

// $(document).ready(function() {

//     $("#sidebar").mCustomScrollbar({
//         theme: "minimal"
//     });

//     // when opening the sidebar
//     $('#sidebarCollapse').on('click', function () {
//         // open sidebar
//         $('#sidebar').addClass('active');
//         // fade in the overlay
//         $('.overlay').fadeIn();
//         $('.collapse.in').toggleClass('in');
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });

   
//     // if dismiss or overlay was clicked
//     $('#dismiss, .overlay').on('click', function () {
//       // hide the sidebar
//       $('#sidebar').removeClass('active');
//       // fade out the overlay
//       $('.overlay').fadeOut();
//     });
// });

class Nav extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <nav className="dismiss">
                    <div id="dismiss">
                        <i className="glyphicon glyphicon-arrow-left"></i>
                    </div>

                    <div className="sidebar-header">
                        <h3>Collapsible Sidebar</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li>
                            <a href="/homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li><a href="/">Page</a></li>
                                <li><a href="/">Page</a></li>
                                <li><a href="/">Page</a></li>
                            </ul>
                            <li><a href="/">Portfolio</a></li>
                            <li><a href="/">Contact</a></li>
                        </li>
                    </ul>
                </nav>

                <div id="content">
                    <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                        <i className="glyphicon glyphicon-align-left"></i>
                        Toggle Sidebar
                    </button>
                </div>
            </div>
        )
    }
}

export default Nav;