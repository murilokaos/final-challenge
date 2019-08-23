import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from 'components/Header';

const routes = ({ component: Component, ...rest }) => {
  const isLoggedIn = true;

  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? (
        <>
          <Header {...props} />
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ))
      }
    />
  );
};

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(routes);
