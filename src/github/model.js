// eslint-disable-next-line import/prefer-default-export
export class GitHubRepo {
  constructor({ name, stars, license, url, language }) {
    this.stars = stars;
    this.license = license;
    this.name = name;
    this.url = url;
    this.language = language;
  }


  get starsInfo() {
    return this.stars > 0 ? `(${this.stars}⭐) ` : '';
  }

  toString() {
    return `${this.name} ${this.starsInfo}`;
  }
  toTableRow(){
    return(`
    <tr onclick="location.assign('${this.url}')">
        <td>
            ${this.name}
        </td>
        <td>
            ${this.starsInfo}
        </td>
        <td>
            ${this.language}
        </td>
    </tr>
    `);
  }
}
