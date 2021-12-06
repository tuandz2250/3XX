module.exports.config = {
  name: "hentai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Random ảnh hentai 18+",
  commandCategory: "random-img",
  usages: "hentai",
  cooldowns: 5,
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
	"https://i.imgur.com/vzRUGSJ.jpg",
"https://i.imgur.com/y5Oa3HC.jpg",
"https://i.imgur.com/DSdnGLv.jpg",
"https://i.imgur.com/ZMbOI29.jpg",
"https://i.imgur.com/QnKbzB7.jpg",
"https://i.imgur.com/CGmbYen.jpg",
"https://i.imgur.com/YsqITDJ.jpg",
"https://i.imgur.com/StNyQ3E.jpg",
"https://i.imgur.com/5JpJxxa.jpg",
"https://i.imgur.com/3hYE938.jpg",
"https://i.imgur.com/NVlBzmK.jpg",
"https://i.imgur.com/VSMUX5f.jpg",
     ];
     var callback = () => api.sendMessage({body:`Hen với chả tai cái đầu óc chỉ có phim sẽ thôi :)`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };