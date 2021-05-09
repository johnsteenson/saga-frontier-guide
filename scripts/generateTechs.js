const readline = require('readline');
const fs = require('fs');

const techs = [];

function getTech(name) {
  const result = techs.find((tech) => tech.name === name);
  if (result) {
    return result;
  }

  const newTech = {
    "name": name,
    "sparkTo": []
  };

  techs.push(newTech);

  return newTech;
}

async function generateSparkTrees() {
  const rl = readline.createInterface({
    input: fs.createReadStream('./data/sparkTree.txt')
  });

  const blankLine = /^\s*$/g,
    newTech = /^\s*(\w+)\s*$/,
    sparkTo = /\-\>\s*([\w\/]+)\s*\|\s*(\d+)/;

  let curTech;

  for await (const line of rl) {
    if (blankLine.test(line)) {
      continue;
    }

    if (newTech.test(line)) {
      const match = line.match(newTech);
      curTech = getTech(match[1]);
    }

    if (sparkTo.test(line)) {
      const match = line.match(sparkTo);

      curTech.sparkTo.push({
        "tech": match[1],
        "chance": parseInt(match[2])
      })
    }


  }

}

function translateCombo(combo) {
  if (combo === 'S>') {
    return 'S'
  }
  if (combo === '<R') {
    return 'R'
  }
  if (combo === 'S><R') {
    return 'SR'
  }
  return ''
}

async function generateCombos(file, type) {
  const rl = readline.createInterface({
    input: fs.createReadStream(file)
  });

  for await (const line of rl) {
    const parts = line.split('|');

    if (parts.length < 9) {
      continue;
    }

    const tech = getTech(parts[0].trim());
    tech.type = type;

    tech.combo = {
      DS: translateCombo(parts[1].trim()),
      DN: translateCombo(parts[2].trim()),
      IS: translateCombo(parts[3].trim()),
      MV: translateCombo(parts[4].trim()),
      HT: translateCombo(parts[5].trim()),
      CL: translateCombo(parts[6].trim()),
      BO: translateCombo(parts[7].trim()),
      SN: translateCombo(parts[8].trim())
    }
  }
}


async function run() {
  await generateSparkTrees();
  await generateCombos('./data/comboTech.txt', 'Tech');
  await generateCombos('./data/comboMonster.txt', 'Monster');
  await generateCombos('./data/comboSpell.txt', 'Spell');

  fs.writeFileSync('../src/data/skills.json', JSON.stringify(techs, 0, 2));
  console.log('Wrote output to src/data/skills.json');

}


run();
