import {getJoke} from './service';

export default async function () {
  // eslint-disable-next-line no-undef
  alert(await getJoke())
}
