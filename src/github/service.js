import { GitHubRepo } from './model';

const REPOS_URL = 'https://api.github.com/users/Amilosz/repos';
const RAW_URL = 'https://raw.githubusercontent.com/Amilosz/Amilosz.github.io/master/blog/en/';
const POSTS_SUB_URL = 'posts/';
const FILES_URL = 'https://api.github.com/repos/Amilosz/Amilosz.github.io/contents/blog/en/posts/';
const ABOUT_ME = 'about-me.md';
const FORBIDDEN_REPOS = [''];
const POST_NAME = /(\d+)\.md/;

const convert = ({
  name,
  stargazers_count: stars,
  license,
  html_url: url,
  language
}) => new GitHubRepo({
  name,
  stars,
  license: license ? license.spdx_id : '',
  url,
  language
});

export default async function getRepo() {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(REPOS_URL);
    if (response.ok) {
      return (await response.json())
        .filter((r) => !FORBIDDEN_REPOS.includes(r.name))
        .map(convert);
    }
    throw Error("response not 200'");
  } catch (err) {
    console.warn(err);
    return [];
  }
}
async function getRaWFileContent(pathToFile) {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(`${RAW_URL}${pathToFile}`);
    if (response.ok) {
      return (await response.text());
    }
    throw Error("response not 200'");
  } catch (err) {
    console.warn(err);
    return '';
  }
}
export async function getBlogPost(name = '0.md') {
  return getRaWFileContent(`${RAW_URL}${POSTS_SUB_URL}${name}`);
}
export async function getAboutMe() {
  return getRaWFileContent(`${ABOUT_ME}`);
}

export async function getBlogPostNames() {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(FILES_URL);
    if (response.ok) {
      return (await response.json())
        .filter((file) => POST_NAME.test(file.name))
        .map(({ name }) => name.split('.')[0]);
    }
    throw Error("response not 200'");
  } catch (err) {
    console.warn(err);
    return [];
  }
}
