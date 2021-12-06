const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "chia tay",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Chia Tay Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "chia tay",
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
          "https://i.imgur.com/hw5Fc8U.gif",
             ];
   var callback = () => api.sendMessage({body:`Mình Chia Tay Nhé Anh Thấy Chúng Ta Không Hợp 💔`
  ,attachment: fs.createReadStream(__dirname + "/cache/bulon.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bulon.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bulon.gif")).on("close",() => callback());
   };