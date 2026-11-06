const settings = {
  prefix: ".", // 👈 This stays as a property inside the object
  packname: '🤡🃏𝐈 𝐀𝐌 LENIMO 🃏🤡',
  author: '‎',
  botName: "🤡🃏𝐈 𝐀𝐌 LENIMO 🃏🤡",
  botOwner: 'NOEL',
  ownerNumber: '254794463885',
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "public",
  maxStoreMessages: 20, 
  storeWriteInterval: 10000,
  description: "This is a bot for managing group commands and automating tasks.",
  version: "3.0.6",
  updateZipUrl: "https://github.com/bigbosssunzy/JOKER-MD/archive/refs/heads/main.zip",
};

// 👇 ADD THIS LINE HERE (Outside the curly braces)
global.prefix = settings.prefix; 

module.exports = settings;
