// eslint-disable-next-line import/prefer-default-export
export class Joke {
  constructor({ setup, punchline }) {
    this.setup = setup;
    this.punchline = punchline;
  }

  toString() {
    return this.setup ? `
    -${this.setup} 
    -${this.punchline}`
      : `${this.punchline}`;
  }
}
