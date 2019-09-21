import { Joke } from './model';

const JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';
const FALLBACK_JOKE_URL = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
/*
  setup	"The punchline often arrives before the set-up."
  punchline	"Do you know the problem with UDP jokes?"
  */
const convert = ({
  setup,
  punchline
}) => new JokeRepo({
  setup,
  punchline
});

export async function getJoke() {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(JOKE_URL);
    const joke = await response.json();
    if (joke.type == 'programming') {
      return new Joke(joke)
    }
    // eslint-disable-next-line no-undef
    const { value: { joke: punchline }} = await ( await fetch(FALLBACK_JOKE_URL)).json();
    return new Joke({ punchline});
  } catch (err) {
    console.warn(err);
    return new Joke({
      setup: 'The punchline often arrives before the set-up.',
      punchline:	'Do you know the problem with UDP jokes?'
    });
  }
}
