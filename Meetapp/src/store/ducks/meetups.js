import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadMeetupsRequest: null,
  loadMeetupsSuccess: ['meetups', 'totalMeetups'],
  loadMeetupsFailure: null,
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
});
