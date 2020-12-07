import React, { Component } from 'react';
import Articles from './Articles'
import Paintings from './Paintings'
import Home from './Home'
import Contact from './Contact'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Navbar extends Component{
    state={clicked:false}
    handleClick=() =>{
        this.setState({ clicked:!this.state.clicked})
    }
    render()
    {
        return(
            <Router>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Talentx</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                <li key={1}>
                    <Link to="/">
                        <a className={"nav-links"} href='...'>Home</a>
                    </Link>
                </li>
                <li key={2}>
                    <Link to="/articles">
                        <a className={"nav-links"} href='...'>Articles</a>
                    </Link>
                </li>
                <li key={3}>
                    <Link to="/paintings">
                        <a className={"nav-links"} href='...'>Paintings</a>
                    </Link>
                </li>
                <li key={4}>
                    <Link to="/contact">
                <a className={"nav-links"} href='...'>Contact</a>
                 </Link>
                </li>
                 </ul>
                
            </nav>
            <Switch>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/paintings">
            <Paintings />
          </Route>
          <Route path='/contact'>
              <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            </Router>
            
        );
    }
}
export default Navbar