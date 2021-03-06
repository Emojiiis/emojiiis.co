const fs = require("fs");
const path = require("path");
const basePath = process.cwd();
const buildDir = path.join(basePath, "/build");
let allEmojis = ["๐","๐","๐","๐","๐","๐","๐","๐คฃ","โบ๏ธ","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐ค","๐ค","๐ค","๐","๐คก","๐ค ","๐","๐","๐","๐","๐","๐","๐","โน๏ธ","๐ฃ","๐","๐ซ","๐ฉ","๐ค","๐ ","๐ก","๐ถ","๐","๐","๐ฏ","๐ฆ","๐ง","๐ฎ","๐ฒ","๐ต","๐ณ","๐ฑ","๐จ","๐ฐ","๐ข","๐ฅ","๐คค","๐ญ","๐","๐ช","๐ด","๐","๐ค","๐คฅ","๐ฌ","๐ค","๐คข","๐คง","๐ท","๐ค","๐ค","๐","๐ฟ","๐น","๐บ","๐ฉ","๐ป","๐","โ ๏ธ","๐ฝ","๐พ","๐ค","๐","๐บ","๐ธ","๐น","๐ป","๐ผ","๐ฝ","๐","๐ฟ","๐พ","๐","โ๏ธ","๐ค","๐","๐","๐ค","๐ช","๐","๐","๐","๐","๐","๐", "๐ง ","๐ถ","๐ฆ","๐ง","๐จ","๐ฉ","๐ฑโโ","๐ฑ","๐ด","๐ต","๐ฒ","๐ณโโ","๐ณ","๐ฎโโ","๐ฎ","๐ทโโ","๐ท","๐โโ","๐","๐ต๏ธโโ๏ธ","๐ต","๐ฉโโ","๐จโโ","๐ฉโ๐พ","๐จโ๐พ","๐ฉโ๐ณ","๐จโ๐ณ","๐ฉโ๐","๐จโ๐","๐ฉโ๐ค","๐จโ๐ค","๐ฉโ๐ซ","๐จโ๐ซ","๐ฉโ๐ญ","๐จโ๐ญ","๐ฉโ๐ป","๐จโ๐ป","๐ฉโ๐ผ","๐จโ๐ผ","๐ฉโ๐ง","๐จโ๐ง","๐ฉโ๐ฌ","๐จโ๐ฌ","๐ฉโ๐จ","๐จโ๐จ","๐ฉโ๐","๐จโ๐","๐ฉโโ","๐จโโ","๐ฉโ๐","๐จโ๐","๐ฉโโ","๐จโโ","๐คถ","๐","๐ธ","๐คด","๐ฐ","๐คต","๐ผ","๐","๐บ","๐ ","๐ข","๐","๐","๐งข","๐ฉ","๐","๐","โ","๐","๐","๐๐ป","๐","๐ผ","๐ถ","โ๏ธ","๐ถ","๐ฑ","๐ญ","๐น","๐ฐ","๐ฆ","๐ป","๐ผ","๐จ","๐ฏ","๐ฆ","๐ฎ","๐ท","๐ฝ","๐ธ","๐ต","๐","๐","๐","๐","๐","๐ง","๐ฆ","๐ค","๐ฃ","๐ฅ","๐ฆ","๐ฆ","๐ฆ","๐ฆ","๐บ","๐","๐ด","๐ฆ","๐","๐","๐ฆ","๐","๐","๐","๐","๐ท","๐ข","๐","๐ฆ","๐ฆ","๐ฆ","๐ฆ","๐","๐ฆ","๐ ","๐","๐ก","๐ฌ","๐ฆ","๐ณ","๐","๐","๐","๐","๐","๐","๐","๐ฆ","๐ช","๐ซ","๐","๐ฆ","๐ฆ","๐","๐","๐","๐","๐","๐","๐ฉ","๐","๐","๐ฉโ๐ค","๐","๐","๐","๐","๐ฟ","๐","๐ฒ","๐ต","๐","โ๏ธ","๐","๐","๐","๐พ","๐","๐ท","๐น","๐ฅ","๐ป","๐ผ","๐จโโ๏ธ","๐ฎ๐ผโโ๏ธ","๐","๐","๐","๐","๐","๐ซ","โจ","โก๏ธ","๐ฅ","๐ฅ","โ๏ธ","๐","โ๏ธ","๐ฉ๐ปโ๐ซ","โ๏ธ","โ๏ธ","โ๏ธ","๐ฌ","๐จ๐ฝโ๐ฌ","๐ฉโโ๏ธ","๐ฉโโ๏ธ","๐","๐งโโ๏ธ","๐จ๐ฟโ๐","๐ง๐ฝ","๐ฆ","๐ฆ","๐ฆ","๐ฆ","๐ฆ", "๐ป", "๐ฅ", "๐ท๐ปโโ๏ธ", "๐น", "๐ฝ", "๐พ", "๐ผ", "๐ท", "๐น", "๐ฅ", "โ๏ธ", "๐ง", "๐งโโ๏ธ", "๐", "โฐ", "๐คด๐ผ", "โณ", "๐ก", "๐", "๐ก", "๐ฆ", "๐ฏ", "๐", "๐ข", "๐ธ", "๐ต", "๐ด", "๐ถ", "๐ท", "๐ฐ", "๐ณ", "๐", "โ๏ธ", "๐จ","๐ซ", "๐ฃ", "๐ฆน๐ปโโ๏ธ", "๐ก", "โ๏ธ", "๐ก", "๐ฌ", "โฐ๐ง๐ปโโ๏ธ", "โฑ๏ธ", "๐บ", "๐ฎ", "๐ฉ๐ฝโโ๏ธ", "๐ฉ๐ผโ๐จ", "๐ฐ๐ป", "๐ญ", "๐ฌ", "๐ธ๐ฝ", "๐", "๐ง๐ผ",  "๐จ๐ปโ๐ซ",  "๐จ๐ฝโ๐ป", "๐ผ", "๐", "๐ฉ๐ผโ๐จ", "๐", "๐", "๐ฆ", "๐ฅท๐ป", "๐", "๐", "๐ฉ๐ผโ๐ผ"];
const models = [
    {file: fs.readFileSync( `./res/svg_templates/1.svg`, 'utf8'), 'name':'Peachy'},
    {file: fs.readFileSync( `./res/svg_templates/2.svg`, 'utf8'), 'name':'Gradient'},
    {file: fs.readFileSync( `./res/svg_templates/3.svg`, 'utf8'), 'name':'Moon'},
    {file: fs.readFileSync( `./res/svg_templates/4.svg`, 'utf8'), 'name':'Nebula'},
    {file: fs.readFileSync( `./res/svg_templates/5.svg`, 'utf8'), 'name':'Circles of Life'},
    {file: fs.readFileSync( `./res/svg_templates/6.svg`, 'utf8'), 'name':'Purple'},
    {file: fs.readFileSync( `./res/svg_templates/7.svg`, 'utf8'), 'name':'Dream'},
    {file: fs.readFileSync( `./res/svg_templates/8.svg`, 'utf8'), 'name':'Droplet'},
    {file: fs.readFileSync( `./res/svg_templates/9.svg`, 'utf8'), 'name':'Northern Lights'},
    {file: fs.readFileSync( `./res/svg_templates/10.svg`, 'utf8'), 'name':'Aube'}
];
let all_metadatas = [];

//Parameters
const MAX_SIZE = 10000,
DESCRIPTION = "emojiiis.co - A NFT community driven project around emojis. Get your NFT-emojis now! https://emojiiis.co",
IPFS_URI = "https://emojiiis.co/nft/svg/",
AUTHOR = "emojiiis.co - A NFT community project",
CONTRIBUTORS = "@jocodey.eth, @vinhundred";


generateAllNFTs();

function generateAllNFTs() {
    for (var i = 1; i <= MAX_SIZE; i++) {
        generateNFT(i);
    }
}

function generateNFT(i) {
    console.log("generating ", i)
    const emojis = [allEmojis[getRandom(0, allEmojis.length -1)], allEmojis[getRandom(0, allEmojis.length -1)], allEmojis[getRandom(0, allEmojis.length -1)]];
    var rand = getRandom(0, 9);
    var background = models[rand];
    createJSON(background, emojis, i);
    createSVG(background, emojis, i);
}

function createSVG(background, emojis, i) {
    var model = background.file;
    model = model.replace(/{{EMOJI_1}}/gmi, emojis[0]);
    model = model.replace(/{{EMOJI_2}}/gmi, emojis[1]);
    model = model.replace(/{{EMOJI_3}}/gmi, emojis[2]);
    model = model.replace(/{{ID}}/gmi, i);
    
    fs.writeFileSync(`${buildDir}/svg/${i}.svg`, model, null);
}

function createJSON(background, emojis, i) {
    let json = {
        id: i,
        name: `${emojis[0]}${emojis[1]}${emojis[2]}`,
        description: DESCRIPTION,
        image: IPFS_URI + `${i}.svg`,
        date: new Date().getTime(),
        authors: AUTHOR,
        contributors: CONTRIBUTORS,
        attributes: [
            {
                trait_type:"Background",
                value: background.name
            },
            {
                trait_type:"Emoji 1",
                value: emojis[0]
            },
            {
                trait_type:"Emoji 2",
                value: emojis[1]
            },
            {
                trait_type:"Emoji 3",
                value: emojis[2]
            },
            {
                trait_type:"Season",
                value: "1"
            },
            ]
    }
    all_metadatas.push(json);
      fs.writeFileSync(
    `${buildDir}/json/_all.json`,
    JSON.stringify(all_metadatas, null, 2)
  );
     fs.writeFileSync(
    `${buildDir}/json/${i}`,
    JSON.stringify(json, null, 2)
  );
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

