const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bopvu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Bóp Vú Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "bopvu",
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
          "https://i.imgur.com/2zaPwA4.gif",
             ];
   var callback = () => api.sendMessage({body:`Được anh bóp phê không baee 🤭`
  ,attachment: fs.createReadStream(__dirname + "/cache/bucu.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bucu.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bucu.gif")).on("close",() => callback());
   };