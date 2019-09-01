import { call, put, select } from 'redux-saga/effects';
import isSameDay from 'date-fns/isSameDay';
import parseISO from 'date-fns/parseISO';
import api from 'services/api';
import MeetupsActions from 'store/ducks/meetups';
import Toast from 'services/utils/toast';
import { sortByDate } from 'services/utils/helpers';

export function* loadMeetups({ page, date }) {
  try {
    const response = yield call(
      api.get,
      `meetups?page=${page}&date=${date.toISOString()}`
    );

    const { rows, count } = response.data;
    const subscriptions = yield select(state => state.meetups.subscriptions);

    const meetups = yield select(state =>
      state.meetups.meetups.filter(item => isSameDay(parseISO(item.date), date))
    );

    const uniques = rows.reduce((acc, curr) => {
      const match = meetups.find(meetup => meetup.id === curr.id);
      const subscribed = subscriptions.find(sub => sub.meetup.id === curr.id);

      if (!match) {
        return acc.concat([{ ...curr, subscribed: !!subscribed }]);
      }
      return acc.map(item => ({ ...item, subscribed: !!subscribed }));
    }, []);

    const all = [...meetups, ...uniques];

    yield put(MeetupsActions.loadMeetupsSuccess(all, count));
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'Error', title: data.error });
    yield put(MeetupsActions.loadMeetupsFailure());
  }
}

export function* loadSubscriptions({ page }) {
  try {
    const response = yield call(api.get, `meetup/subscriptions?page=${page}`);

    const { rows, count } = response.data;

    const subscriptions = yield select(state => state.meetups.subscriptions);
    const uniques = rows.reduce((acc, curr) => {
      const match = subscriptions.find(sub => sub.id === curr.id);
      if (!match) {
        return acc.concat([curr]);
      }
      return acc;
    }, []);

    const subs = sortByDate([...subscriptions, ...uniques]);

    yield put(MeetupsActions.loadUserSubscriptionsSuccess(subs, count));
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'Error', title: data.error });
    yield put(MeetupsActions.loadUserSubscriptionsFailure());
  }
}

export function* userSubscribe({ id: meetupId }) {
  try {
    yield call(api.post, '/meetup/subscription', {
      meetupId,
    });

    const meetups = yield select(state =>
      state.meetups.meetups.map(item => {
        if (item.id === meetupId) {
          return { ...item, subscribed: true };
        }
        return item;
      })
    );

    Toast({ type: 'Success', title: 'Inscriçao realizada com sucesso!' });
    yield put(MeetupsActions.userSubscribeSuccess(meetups));
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'Error', title: data.error });
    yield put(MeetupsActions.userSubscribeFailure());
  }
}

export function* userUnsubscribe({ id, meetupId }) {
  try {
    const response = yield call(api.delete, `meetup/subscription/${meetupId}`);

    const { ok } = response.data;

    if (ok) {
      Toast({ type: 'Success', title: 'Inscriçao cancelada com sucesso!' });
    }

    yield put(MeetupsActions.userUnsubscribeSuccess(id));
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'Error', title: data.error });
    yield put(MeetupsActions.userUnsubscribeFailure());
  }
}

export function* meetupsUserLogout() {
  yield put(MeetupsActions.USER_LOGOUT);
}
