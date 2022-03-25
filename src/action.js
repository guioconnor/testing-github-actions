const axios = require('axios');


async function run() {
  const {data} = await axios.get('https://futuramaapi.herokuapp.com/api/characters/dr-zoidberg/1')

  console.log(`${data[0].character}: ${data[0].quote}`);

}

run();