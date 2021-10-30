import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import New from '../views/New';
import Edit from '../views/Edit';
import SingleStuffView from '../views/SingleStuff';

import Stuff from '../views/Stuff';

export default function Routes({ uid }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home uid={uid} />} />
        <Route exact path="/new" component={() => <New uid={uid} />} />
        <Route exact path="/stuff" component={() => <Stuff uid={uid} />} />
        <Route exact path="/edit/:key" component={() => <Edit uid={uid} />} />
        <Route exact path="/stuff/:key" component={SingleStuffView} />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  uid: PropTypes.string.isRequired,
};
