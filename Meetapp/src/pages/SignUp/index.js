import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Container } from './styles';

const SignUp = ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>Meetups</Text>
    </TouchableOpacity>
  </View>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect(
//   mapStateToProps
//   // mapDispatchToProps
// )(SignIn);

export default SignUp;
