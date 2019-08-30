import React from 'react';
import { useSelector } from 'react-redux';
import { setNavigator } from 'services/navigate';

import Router from 'routes';

export default function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const Routes = Router(isLoggedIn);

  return <Routes ref={setNavigator} />;
}
