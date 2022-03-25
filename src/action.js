const axios = require('axios');
const core = require('@actions/core')

const DEFAULT_CHARACTER = 'dr-zoidberg';

async function run() {
  const character = core.getInput('character') || DEFAULT_CHARACTER;
  console.log(character);

  const {data} = await axios.get(`https://futuramaapi.herokuapp.com/api/characters/${character}/1`)

  console.log(`${data[0].character}: ${data[0].quote}`);

}

run();