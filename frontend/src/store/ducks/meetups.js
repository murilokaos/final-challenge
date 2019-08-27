import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadUserMeetupsRequest: null,
  loadUserMeetupsSuccess: ['meetups', 'totalMeetups'],
  loadUserMeetupsFailure: null,
  deleteUserMeetupRequest: ['id'],
  deleteUserMeetupSuccess: ['id'],
  deleteUserMeetupFailure: null,
  registerMeetupRequest: ['data'],
  registerMeetupSuccess: null,
  registerMeetupFailure: null,
  editMeetupRequest: ['id', 'data'],
  editMeetupSuccess: ['data'],
  editMeetupFailure: null,
});

export const MeetupsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  meetups: [],
  totalMeetups: 0,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_USER_MEETUPS_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.LOAD_USER_MEETUPS_SUCCESS]: (state, { meetups, totalMeetups }) => state.merge({
    meetups,
    totalMeetups,
    loading: false,
    error: false,
  }),
  [Types.LOAD_USER_MEETUPS_FAILURE]: (state) => state.merge({
    error: true,
    loading: false,
    meetups: [],
    totalMeetups: 0,
  }),
  [Types.DELETE_USER_MEETUP_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.DELETE_USER_MEETUP_SUCCESS]: (state, { id }) => state.merge({
    loading: false,
    meetups: state.meetups.filter((meetup) => meetup.id !== id),
    totalMeetups: state.totalMeetups - 1,
  }),
  [Types.DELETE_USER_MEETUP_FAILURE]: (state) => state.merge({ loading: false }),
  [Types.REGISTER_MEETUP_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.REGISTER_MEETUP_SUCCESS]: (state) => state.merge({ loading: false, error: false }),
  [Types.REGISTER_MEETUP_FAILURE]: (state) => state.merge({ loading: false, error: true }),
  [Types.EDIT_MEETUP_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.EDIT_MEETUP_SUCCESS]: (state) => state.merge({ loading: false, error: false }),
  [Types.EDIT_MEETUP_FAILURE]: (state) => state.merge({ loading: false, error: true }),
});
