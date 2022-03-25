const axios = require('axios');
const core = require('@actions/core')

async function run() {
  const character = core.getInput('character');
  console.log('c:' + character);

  const {data} = await axios.get('https://futuramaapi.herokuapp.com/api/characters/dr-zoidberg/1')

  console.log(`${data[0].character}: ${data[0].quote}`);

}

run();