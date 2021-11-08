import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './pages/home';
import Releases from './pages/releases';
import Anime from './pages/anime';
import Favorites from './pages/favorites';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/releases" exact component={Releases}></Route>
                <Route path="/favorites" exact component={Favorites}></Route>
                <Route path="/anime/:animeId" exact component={Anime}></Route>
            </Switch>
        </BrowserRouter>
    )
}