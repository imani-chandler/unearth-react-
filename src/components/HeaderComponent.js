import React, { Component } from 'react';
import {Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <React.Fragment>
            <Jumbotron fluid>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h1>Unearth</h1>
                            <h2>Unearth Your Path. Unearth The Truth.</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Navbar light expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>                   
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home"> Home</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/characters"> Characters</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        </React.Fragment>
        );
    }
}

export default Header;