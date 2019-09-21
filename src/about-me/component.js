import { getAboutMe } from '../github/service';

// eslint-disable-next-line no-undef,import/prefer-default-export
export class AboutMe extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.render();
  }


  async render() {
    this.clean();
    // eslint-disable-next-line no-undef
    const md = document.createElement('mark-down');
    md.textContent = (await getAboutMe());
    this.shadow.appendChild(md);
  }

  clean() {
    this.shadow.childNodes.forEach((child) => child.remove());
  }
}
