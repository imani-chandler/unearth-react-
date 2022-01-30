import React, { Component } from 'react';
import Home from './HomeComponent';
import Character from './CharacterComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    
    render() {
    return (
        <div>
            <Header />
            <Switch>
            <Route path='/home' render={() => <Home />} />
                <Route exact path='/characters' render={() => <Character />} />
                <Route exact path='/aboutus' render={() => <Home />} />                  
                <Redirect to ='/home' />
            </Switch>
            <Footer />
        </div>
    );
    }
}

export default Main;









