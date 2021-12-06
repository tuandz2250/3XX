module.exports.config = {
  name: "vitamingirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "lat",
  description: "Random Vitamin Gái Xinh",
  commandCategory: "Image",
  usages: "vitamingirl",
  cooldowns: 1
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
   return request(encodeURI(`https://api.leanhtruong.net/v2/image.php?api_key=LEANHTRUONG=dLuw13lBkdRmMuh3K4k09YaT7WoCD7ltJFpx8ICzX6r8apcbrH=APIKEY=PLANFREE&image=vitamin`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}