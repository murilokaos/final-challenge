import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/Header';
import { Background, Container } from './styles';

const Dashboard = ({ navigation }) => (
  <Background>
    <Header />
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </Container>
  </Background>
);

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default Dashboard;
