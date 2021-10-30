import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import New from '../views/New';
import Edit from '../views/Edit';
import SingleStuffView from '../views/SingleStuff';

import Stuff from '../views/Stuff';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={New} />
        <Route exact path="/stuff" component={Stuff} />
        <Route exact path="/edit/:key" component={Edit} />
        <Route exact path="/stuff/:key" component={SingleStuffView} />
      </Switch>
    </>
  );
}
