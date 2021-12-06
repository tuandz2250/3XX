/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "mông",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Ảnh Mông Gái Cực Bổ Mắt ( Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
  commandCategory: "Random-img",
  usages: "mông",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
 "https://i.imgur.com/nYCKch8.jpg",
 "https://i.imgur.com/pKeyu4X.jpg",
 "https://i.imgur.com/ZO166Og.jpg",
 "https://i.imgur.com/wcLr01s.jpg",
 "https://i.imgur.com/woJxed7.jpg",
 "https://i.imgur.com/SJc7ZUa.jpg",
 "https://i.imgur.com/aAspPIp.jpg",
 "https://i.imgur.com/b5rrNWe.jpg",
 "https://i.imgur.com/vgS8980.jpg",
 "https://i.imgur.com/SKcxTwO.jpg",
 "https://i.imgur.com/B4K49fz.jpg",
 "https://i.imgur.com/28Tzsuw.jpg",
 "https://i.imgur.com/IYggqjD.jpg",
 "https://i.imgur.com/xIkv3td.jpg",
 "https://i.imgur.com/nfWKOFk.jpg",
 "https://i.imgur.com/EIAzjE5.jpg",
 "https://i.imgur.com/SpKu2ga.jpg",
 "https://i.imgur.com/W6PGVIW.jpg",
 "https://i.imgur.com/ezh4mfH.jpg",
 "https://i.imgur.com/C18d9JF.jpg",
 "https://i.imgur.com/HZiR0hM.jpg",
 "https://i.imgur.com/hzCGqhz.jpg",
 "https://i.imgur.com/3ukPhLf.jpg",
 "https://i.imgur.com/olxARFT.jpg",
 "https://i.imgur.com/WerNarw.jpg",
 "https://i.imgur.com/GJ3qlyS.jpg",
 "https://i.imgur.com/ijV2Mju.jpg",
 "https://i.imgur.com/wSmaoCM.jpg",
 "https://i.imgur.com/nCl64c2.jpg",
 "https://i.imgur.com/G9v53bw.jpg",
 "https://i.imgur.com/5p7zK3N.jpg",
 "https://i.imgur.com/IfhSVfi.jpg",
 "https://i.imgur.com/nfIXz67.jpg",
 "https://i.imgur.com/4qVFWKk.jpg",
 "https://i.imgur.com/1IFldvh.jpg",
 "https://i.imgur.com/yzhxm1c.jpg",
 "https://i.imgur.com/Y8UByko.jpg",
 "https://i.imgur.com/xkHatPt.jpg",
 "https://i.imgur.com/dAZMpMb.jpg",
 "https://i.imgur.com/hfVa6ur.jpg",
 "https://i.imgur.com/uCGOwWM.jpg",
 "https://i.imgur.com/iW0lFao.jpg",
 "https://i.imgur.com/6o7lkzK.jpg",
 "https://i.imgur.com/VHgHKux.jpg",
 "https://i.imgur.com/PDD0c3b.jpg",
 "https://i.imgur.com/YvWVuN8.jpg",
 "https://i.imgur.com/dsrWtA4.jpg",
 "https://i.imgur.com/FVkLWGP.jpg",
 "https://i.imgur.com/Bqc5DuG.jpg",
 "https://i.imgur.com/ZfemNMQ.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`Bổ mắt nhé😼\n» Số dư: -100 đô «`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};