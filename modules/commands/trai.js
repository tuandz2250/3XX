module.exports.config = {
  name: "trai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Random ảnh trai",
  commandCategory: "random-img",
  usages: "trai",
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
"https://i.imgur.com/RugqIsE.jpg",
"https://i.imgur.com/Zg8gCRi.jpg",
"https://i.imgur.com/Q12izpx.jpg",
"https://i.imgur.com/4pa7ThF.jpg",
"https://i.imgur.com/gmZQoqe.jpg",
"https://i.imgur.com/g2HOtF6.jpg",
"https://i.imgur.com/yl7A6Ns.jpg",
"https://i.imgur.com/eaDOZnC.jpg",
"https://i.imgur.com/VFspbfW.jpg",
"https://i.imgur.com/RP1tpFz.jpg",
"https://i.imgur.com/cJErkOY.jpg",
"https://i.imgur.com/fOaL1RC.jpg",
"https://i.imgur.com/mDrBofk.jpg",
"https://i.imgur.com/ffu0IQV.jpg",
"https://i.imgur.com/xkoPbyl.jpg",
"https://i.imgur.com/uQ30ady.jpg",
"https://i.imgur.com/QPIce66.jpg",
"https://i.imgur.com/gH0Qwte.jpg",
"https://i.imgur.com/eoVIliQ.jpg",
"https://i.imgur.com/jCOlQPw.jpg",
"https://i.imgur.com/3wOuBgV.jpg",
"https://i.imgur.com/Cl64w7g.jpg",
"https://i.imgur.com/vi90Mtb.jpg",
"https://i.imgur.com/7QeSlYO.jpg",
     ];
     var callback = () => api.sendMessage({body:`Bớt Mê Trai Lại -.-`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };