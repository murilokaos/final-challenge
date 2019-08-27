import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Container } from './styles';

const Meetups = ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
      <Text>SignIn</Text>
    </TouchableOpacity>
  </View>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect(
//   mapStateToProps
//   // mapDispatchToProps
// )(Meetups);

export default Meetups;
