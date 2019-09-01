import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-modal-datetime-picker';

import MeetupActions from 'store/ducks/meetups';
import Background from 'components/Background';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Meetup from 'components/Meetup';
import { light, white } from 'services/utils/colors';

import { formatBrDate } from 'services/utils/helpers';
import {
  Container,
  DateFilter,
  DateText,
  Empty,
  EmptyContainer,
  List,
  Navigator,
} from './styles';

const Dashboard = ({ isFocused }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.meetups.loading);
  const meetups = useSelector(state => state.meetups.meetups);
  const totalMeetups = useSelector(state => state.meetups.totalMeetups);

  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

  async function loadMeetups(selectedPage = 1) {
    if (selectedPage > 1 && !hasMore) return;

    dispatch(MeetupActions.loadMeetupsRequest(selectedPage, date));

    setHasMore(totalMeetups / 10 > selectedPage);
    setPage(selectedPage);
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused, date]); // eslint-disable-line

  function handleSubscribe(meetupId) {
    dispatch(MeetupActions.userSubscribeRequest(meetupId));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleDate(dateFromPicker) {
    setDate(dateFromPicker);
    setVisible(false);
  }

  return (
    <Background>
      <Header />
      <DatePicker
        isVisible={visible}
        onConfirm={handleDate}
        onCancel={() => setVisible(false)}
        cancelTextIOS="Cancelar"
        confirmTextIOS="OK"
      />
      <Container>
        <DateFilter>
          <Navigator onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color={white} />
          </Navigator>
          <Navigator onPress={() => setVisible(!visible)}>
            <DateText>
              {formatBrDate(date.toISOString(), `dd 'de' MMMM`)}
            </DateText>
          </Navigator>
          <Navigator onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color={white} />
          </Navigator>
        </DateFilter>
        {loading && <Loader />}
        {!loading && (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                meetup={item}
                action={handleSubscribe}
                disabled={item.subscribed}
                actionTitle={
                  item.subscribed ? 'Já está inscrito' : 'Realizar Inscrição'
                }
              />
            )}
            onRefresh={loadMeetups}
            refreshing={refreshing}
            onEndReached={() => loadMeetups(page + 1)}
            onEndReachedThreshold={0.1}
            ListEmptyComponent={
              <EmptyContainer>
                <Icon name="event-busy" size={35} color={light} />
                <Empty>
                  Ainda nao existem meetups cadastrados para esta data :/
                </Empty>
              </EmptyContainer>
            }
          />
        )}
      </Container>
    </Background>
  );
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
