// eslint-disable-next-line import/prefer-default-export
export class GitHubRepo {
  constructor({ name, stars, license }) {
    this.stars = stars;
    this.license = license;
    this.name = name;
  }


  get starsInfo() {
    return this.stars > 0 ? `(${this.stars}⭐) ` : '';
  }

  toString() {
    return `${this.name} ${this.starsInfo}`;
  }
}
