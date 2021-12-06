module.exports.config = {
  name: "nyadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Quyền",
  description: "Hàng đặt riêng của bạn chủ bot,nếu thích thì cứ xài ^^",
  commandCategory: "random-img",
  usages: "Quyền",
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
"https://i.imgur.com/XnQpjbL.jpg",
"https://i.imgur.com/Cm1dl32.jpg",
"https://i.imgur.com/yTalc4I.jpg",
"https://i.imgur.com/QjvBY20.jpg",
"https://i.imgur.com/Bg1xcTG.jpg",
"https://i.imgur.com/kSSkxBf.jpg",
"https://i.imgur.com/3noZsHO.jpg",
"https://i.imgur.com/ElBpdYt.jpg",
"https://i.imgur.com/55Lwnmt.jpg",
"https://i.imgur.com/wzBEltd.jpg", 
     ];
     var callback = () => api.sendMessage({body:`Ny admin bot ❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
