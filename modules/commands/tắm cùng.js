module.exports.config = {
  name: "tắm cùng",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Tắm Cùng Người Bạn Muốn",
  commandCategory: "random-img",
  usages: "tắm cùng",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/l0MzGof.jpg",
     ];
     var callback = () => api.sendMessage({body:`Lại Đây Tắm Cùng Mình Nào 👉👈`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };