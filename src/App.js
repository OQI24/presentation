import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {Bio} from "./pages/Bio";
import {Hobbies} from "./pages/Hobbies";
import {NavBar} from "./components/NavBar";
import Notes from "./pages/Notes/index";
import {UrlShorter} from "./pages/UrlShorter";

function App() {
    return (
        <BrowserRouter>
            <div className="root vh-100">
                <NavBar header={true}/>
                <div className="wrapper">
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/bio'} component={Bio}/>
                        <Route path={'/hobbies'} component={Hobbies}/>
                        <Route path={'/notes'} component={Notes}/>
                        <Route path={'/url-shorter'} component={UrlShorter}/>
                    </Switch>
                </div>
                <NavBar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
