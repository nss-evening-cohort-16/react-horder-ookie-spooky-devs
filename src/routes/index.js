import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import New from '../views/New';
import Edit from '../views/Edit';
import SingleStuffView from '../views/SingleStuff';

import Stuff from '../views/Stuff';

export default function Routes({ uid }) {
  console.warn('Routes', uid);
  return (
    <>
      <Switch>
        <Route exact path="/" uid={uid} component={Home} />
        <Route exact path="/new" uid={uid} component={New} />
        <Route exact path="/stuff" component={() => <Stuff uid={uid} />} />
        <Route exact path="/edit/:key" uid={uid} component={Edit} />
        <Route exact path="/stuff/:key" uid={uid} component={SingleStuffView} />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  uid: PropTypes.string.isRequired,
};
