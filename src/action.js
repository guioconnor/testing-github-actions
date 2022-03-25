const axios = require('axios');
const core = require('@actions/core')

const DEFAULT_CHARACTER = 'dr-zoidberg';
const DEFAULT_QUOTE_COUNT = 1;


const AVAILABLE_CHARACTERS = [
  'bender',
  'fry',
  'leela',
  'dr-zoidberg'
]

async function run() {
  const character = core.getInput('character') || DEFAULT_CHARACTER;
  const quoteCount = core.getInput('quoteCount') || DEFAULT_QUOTE_COUNT;

  core.debug(`[Futurama] Input character: ${character}`);
  core.debug(`[Futurama] Quote count: ${quoteCount}`);

  if( !AVAILABLE_CHARACTERS.includes(character)){
    core.setFailed(`Unknown character: ${character}`)
    return
  }

  core.debug(`[Futurama] Retrieving quote for: ${character}`)

  const {data} = await axios.get(`https://futuramaapi.herokuapp.com/api/characters/${character}/${quoteCount}`)

  core.debug(`[Futurama] Data: ${JSON.stringify(data)}`)

  data.forEach((d)=> {
    console.log(`${d.character}: ${d.quote}`);
  })

  const firstEntry = data[0];
  core.setOutput('quote', firstEntry);
}

run();