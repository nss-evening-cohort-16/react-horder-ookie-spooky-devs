import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewStuffForm from '../components/NewStuffForm';
import Home from '../views/Home';
// import New from '../views/New';

import Stuff from '../views/Stuff';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={NewStuffForm} />
        <Route exact path="/stuff" component={Stuff} />
      </Switch>
    </>
  );
}
