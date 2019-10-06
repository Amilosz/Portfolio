// eslint-disable-next-line import/prefer-default-export
export function markdownRenderer(targetConstructor) {
  // eslint-disable-next-line no-param-reassign
  targetConstructor.prototype.renderMarkdown = (content) => (`
    <mark-down>
        ${content}
    </mark-down>
    `);
}

export function renderer(onAttributesChange = false) {
  return function decorator(targetConstructor) {
    const proto = targetConstructor.prototype;
    if (onAttributesChange) {
      proto.attributeChangedCallback = function callback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          this.render();
        }
      };
    }
    proto.init = function init() {
      this.attachShadow({ mode: 'open' });
      if (!onAttributesChange) this.render();
    };
  };
}
