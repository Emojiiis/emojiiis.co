const fs = require("fs");
const path = require("path");
const basePath = process.cwd();
const buildDir = path.join(basePath, "/build");
let allEmojis = ["😀","😃","😄","😁","😆","😅","😂","🤣","☺️","😊","😇","🙂","🙃","😉","😌","😍","😘","😗","😙","😚","😋","😜","😝","😛","🤑","🤗","🤓","😎","🤡","🤠","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","😤","😠","😡","😶","😐","😑","😯","😦","😧","😮","😲","😵","😳","😱","😨","😰","😢","😥","🤤","😭","😓","😪","😴","🙄","🤔","🤥","😬","🤐","🤢","🤧","😷","🤒","🤕","😈","👿","👹","👺","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","👊","✌️","🤘","🖖","👋","🤙","💪","💍","💄","💋","👄","👅","👀", "🧠","👶","👦","👧","👨","👩","👱‍♀","👱","👴","👵","👲","👳‍♀","👳","👮‍♀","👮","👷‍♀","👷","💂‍♀","💂","🕵️‍♀️","🕵","👩‍⚕","👨‍⚕","👩‍🌾","👨‍🌾","👩‍🍳","👨‍🍳","👩‍🎓","👨‍🎓","👩‍🎤","👨‍🎤","👩‍🏫","👨‍🏫","👩‍🏭","👨‍🏭","👩‍💻","👨‍💻","👩‍💼","👨‍💼","👩‍🔧","👨‍🔧","👩‍🔬","👨‍🔬","👩‍🎨","👨‍🎨","👩‍🚒","👨‍🚒","👩‍✈","👨‍✈","👩‍🚀","👨‍🚀","👩‍⚖","👨‍⚖","🤶","🎅","👸","🤴","👰","🤵","👼","💃","🕺","👠","👢","👞","👟","🧢","🎩","🎓","👑","⛑","🎒","👝","🎅🏻","👜","💼","🕶","☂️","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐚","🐞","🐜","🕷","🐢","🐍","🦎","🦂","🦀","🦑","🐙","🦐","🐠","🐟","🐡","🐬","🦈","🐳","🐋","🐊","🐆","🐅","🐃","🐂","🐄","🦌","🐪","🐫","🐘","🦏","🦍","🐎","🐖","🐐","🐏","🐑","🐕","🐩","🐈","🐓","👩‍🎤","🕊","🐇","🐁","🐀","🐿","🐉","🐲","🌵","🎄","☘️","🍀","🍁","🍄","🌾","💐","🌷","🌹","🥀","🌻","🌼","👨‍⚕️","👮🏼‍♀️","🌎","🌍","🌏","🌕","🌙","💫","✨","⚡️","🔥","💥","☀️","🌈","☁️","👩🏻‍🏫","☃️","⛄️","❄️","🌬","👨🏽‍🔬","👩‍⚕️","👩‍✈️","🌊","🧝‍♀️","👨🏿‍🚀","🧕🏽","🦓","🦒","🦔","🦕","🦖", "💻", "🖥", "👷🏻‍♂️", "🕹", "💽", "💾", "📼", "📷", "📹", "🎥", "☎️", "🧞", "🧞‍♂️", "🎙", "⏰", "🤴🏼", "⏳", "📡", "🔋", "💡", "🔦", "🕯", "🗑", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎", "⚖️", "🔨","🔫", "💣", "🦹🏻‍♀️", "🗡", "⚔️", "🛡", "🚬", "⚰🧙🏻‍♀️", "⚱️", "🏺", "🔮", "👩🏽‍⚖️", "👩🏼‍🎨", "👰🏻", "🔭", "🔬", "👸🏽", "💊", "🧛🏼",  "👨🏻‍🏫",  "👨🏽‍💻", "🖼", "🛍", "👩🏼‍🎨", "🎁", "🎈", "🦄", "🥷🏻", "🎊", "🎉", "👩🏼‍💼"];
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

