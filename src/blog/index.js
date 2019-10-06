import {library} from '@fortawesome/fontawesome-svg-core';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {
  BlogPost, Footer, Header, Navigation, Body
} from './component';

// eslint-disable-next-line no-undef
export default () => {
  library.add(faSpinner);

  customElements.define('blog-header', Header);
  customElements.define('blog-post', BlogPost);
  customElements.define('blog-nav', Navigation);
  customElements.define('blog-footer', Footer);
  customElements.define('blog-body', Body);
};
