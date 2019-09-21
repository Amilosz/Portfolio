import getRepos from './service';

export default async function () {
  // eslint-disable-next-line no-undef
  (await getRepos()).forEach((r) => alert(r));
}
