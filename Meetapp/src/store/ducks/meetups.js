import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadMeetupsRequest: ['page', 'date'],
  loadMeetupsSuccess: ['meetups', 'totalMeetups'],
  loadMeetupsFailure: null,
  loadUserSubscriptionsRequest: ['page'],
  loadUserSubscriptionsSuccess: ['subscriptions', 'totalSubscriptions'],
  loadUserSubscriptionsFailure: null,
  userSubscribeRequest: ['id'],
  userSubscribeSuccess: ['meetups'],
  userSubscribeFailure: null,
  userUnsubscribeRequest: ['id', 'meetupId'],
  userUnsubscribeSuccess: ['id'],
  userUnsubscribeFailure: null,
  userLogout: null,
});

export const MeetupsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  meetups: [],
  totalMeetups: 0,
  subscriptions: [],
  totalSubscriptions: 0,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_MEETUPS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_MEETUPS_SUCCESS]: (state, { meetups, totalMeetups }) =>
    state.merge({
      meetups,
      totalMeetups,
      loading: false,
      error: false,
    }),
  [Types.LOAD_MEETUPS_FAILURE]: state =>
    state.merge({
      error: true,
      loading: false,
      meetups: [],
      totalMeetups: 0,
    }),
  [Types.LOAD_USER_SUBSCRIPTIONS_REQUEST]: state =>
    state.merge({ loading: true }),
  [Types.LOAD_USER_SUBSCRIPTIONS_SUCCESS]: (
    state,
    { subscriptions, totalSubscriptions }
  ) =>
    state.merge({
      subscriptions,
      totalSubscriptions,
      loading: false,
      error: false,
    }),
  [Types.LOAD_USER_SUBSCRIPTIONS_FAILURE]: state =>
    state.merge({
      error: true,
      loading: false,
      subscriptions: [],
      totalSubscriptions: 0,
    }),
  [Types.USER_SUBSCRIBE_REQUEST]: state => state.merge({ loading: true }),
  [Types.USER_SUBSCRIBE_SUCCESS]: (state, { meetups }) =>
    state.merge({
      loading: false,
      meetups,
    }),
  [Types.USER_SUBSCRIBE_FAILURE]: state =>
    state.merge({ loading: false, error: true }),
  [Types.USER_UNSUBSCRIBE_REQUEST]: state => state.merge({ loading: true }),
  [Types.USER_UNSUBSCRIBE_SUCCESS]: (state, { id }) =>
    state.merge({
      loading: false,
      subscriptions: state.subscriptions.filter(item => item.id !== id),
      totalSubscriptions: state.totalSubscriptions - 1,
    }),
  [Types.USER_UNSUBSCRIBE_FAILURE]: state =>
    state.merge({ loading: false, error: true }),
  [Types.USER_LOGOUT]: state => state.merge(INITIAL_STATE),
});
