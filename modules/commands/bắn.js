const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bắn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Bắn Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "bắn",
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
          "https://i.imgur.com/8Ubm2zE.gif",
             ];
   var callback = () => api.sendMessage({body:`Hẹn Mày Kiếp Sau Nhe Con Đuỹ 😈`
  ,attachment: fs.createReadStream(__dirname + "/cache/bulon.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bulon.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bulon.gif")).on("close",() => callback());
   };