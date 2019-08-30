import { NavigationActions } from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export default function navigate(routeName, params) {
  return navigator.dispatch(NavigationActions.navigate({ routeName, params }));
}
