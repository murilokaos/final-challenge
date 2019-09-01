import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MeetupActions from 'store/ducks/meetups';
import Background from 'components/Background';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Meetup from 'components/Meetup';
import { light } from 'services/utils/colors';

import { Container, Empty, List, EmptyContainer } from './styles';

const Subscriptions = ({ isFocused }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.meetups.loading);
  const subscriptions = useSelector(state => state.meetups.subscriptions);
  const totalSubscriptions = useSelector(
    state => state.meetups.totalSubscriptions
  );

  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false); // eslint-disable-line
  const [hasMore, setHasMore] = useState(false);

  async function loadSubscriptions(selectedPage = 1) {
    if (selectedPage > 1 && !hasMore) return;

    dispatch(MeetupActions.loadUserSubscriptionsRequest(selectedPage));

    setHasMore(totalSubscriptions / 10 > selectedPage);
    setPage(selectedPage);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]); // eslint-disable-line

  function handleUnsubscribe(meetupId, id) {
    dispatch(MeetupActions.userUnsubscribeRequest(id, meetupId));
  }

  return (
    <Background>
      <Header />
      <Container>
        {loading && <Loader />}
        {!loading && (
          <List
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                id={item.id}
                meetup={item.meetup}
                action={handleUnsubscribe}
                actionTitle="Cancelar Inscrição"
              />
            )}
            onRefresh={loadSubscriptions}
            refreshing={refreshing}
            onEndReached={() => loadSubscriptions(page + 1)}
            onEndReachedThreshold={0.1}
            ListEmptyComponent={
              <EmptyContainer>
                <Icon name="event-busy" size={35} color={light} />
                <Empty>Voce ainda nao se inscreveu em nenhum Meetup.</Empty>
              </EmptyContainer>
            }
          />
        )}
      </Container>
    </Background>
  );
};

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
