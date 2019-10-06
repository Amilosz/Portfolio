import { getAboutMe } from '../github/service';
import {markdownRenderer, renderer} from '../common/decorator';

@renderer()
@markdownRenderer
export class AboutMe extends HTMLElement {
  constructor() {
      super();
      this.init();
  }

  async render() {
    const about = (await getAboutMe());
    this.shadowRoot.innerHTML = this.renderMarkdown(about);
  }
}
