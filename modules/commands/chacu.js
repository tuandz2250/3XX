const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "chacu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Chà Cu Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "chacu",
  cooldowns: 5,
  dependencies: {
        "fs": "",
        "axios": "",
		"request": ""
    }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                if (args.join().indexOf('@') !== -1)
        var link = [
          "https://i.imgur.com/iHHclXs.gif",
             ];
   var callback = () => api.sendMessage({body:`Đang Chà Cu Ai Đó Em 🥀`
  ,attachment: fs.createReadStream(__dirname + "/cache/bulon.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bulon.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bulon.gif")).on("close",() => callback());
   };