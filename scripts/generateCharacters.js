const readline = require('readline');
const fs = require('fs');

const characters = [];

function getCharacter(name, type = "Human") {
  const result = characters.find((character) => character.name === name);
  if (result) {
    return result;
  }

  const newCharacter = {
    "name": name,
    "type": type,
    "sparkTalent": []
  };

  characters.push(newCharacter);

  return newCharacter;
}

async function generateTalentList() {
  const rl = readline.createInterface({
    input: fs.createReadStream('./data/characterTalents.txt')
  });

  const blankLine = /^\s*$/g,
    newChar = /^\s*\@(\w+)\s*$/,
    talentLine = /\s*([\w\/]+)\s*\|/;

  let curChar;

  for await (const line of rl) {
    if (blankLine.test(line)) {
      continue;
    }

    if (newChar.test(line)) {
      const match = line.match(newChar);
      curChar = getCharacter(match[1]);
    }

    if (talentLine.test(line)) {
      const match = line.match(talentLine);

      curChar.sparkTalent.push(match[1])
    }
  }

}


async function run() {
  getCharacter('', ''); // Generate blank char

  await generateTalentList();

  fs.writeFileSync('../src/data/characters.json', JSON.stringify(characters, 0, 2));
  console.log('Wrote output to src/data/characters.json');

}


run();
