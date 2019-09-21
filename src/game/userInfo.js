import { TOO_LESS, TOO_MUCH } from './constants';

export default (num, expected) => {
  if (num > expected) {
    // eslint-disable-next-line no-undef
    alert(TOO_MUCH);
  } else {
    // eslint-disable-next-line no-undef
    alert(TOO_LESS);
  }
};
