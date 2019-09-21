import TO_FIND from './random';
import getNum from './input';
import succces from './succces';
import info from './userInfo';
import counter from "./counter";

export default () => {
  alert ('Wylosowano liczbe z przedzialu 1-50. Zgaduj!');
  let num = getNum();
  counter.init();
  while (num !== TO_FIND) {
    counter.increment();
    info(num, TO_FIND);
    num = getNum();
  }
  succces(counter.result);

};
