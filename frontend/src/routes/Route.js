import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';

const Routes = ({ component: Component, isPrivate, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isLoggedIn && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? (
        <>
          <Header {...props} />
          <Component {...props} />
        </>
      ) : (
        <Component {...props} />
      ))
      }
    />
  );
};

Routes.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

Routes.defaultProps = {
  isPrivate: false,
};

export default Routes;
