import { RNToasty } from 'react-native-toasty';

export default function MyToast({ type, ...props }) {
  return RNToasty[type]({ duration: 0, ...props });
}
