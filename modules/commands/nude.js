module.exports.config = {
  name: "nude",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HungCho",
  description: "Random ảnh girl",
  commandCategory: "random-img",
  usages: "nude",
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
     "https://i.imgur.com/0eQqnyv.jpg",
     "https://i.imgur.com/cuViN6g.jpg",
     "https://i.imgur.com/66O6j1T.jpg",
     "https://i.imgur.com/cQ4bk4V.jpg",
     "https://i.imgur.com/AItOYmW.jpg",
     "https://i.imgur.com/AWEW2x0.jpg",
     "https://i.imgur.com/Ot8Gi2c.jpg",
     "https://i.imgur.com/LgCTgHK.jpg",
     "https://i.imgur.com/hxqjQoU.jpg",
     "https://i.imgur.com/mHuLHCa.jpg",
     "https://i.imgur.com/wcPUGG3.jpg",
     "https://i.imgur.com/BHjh6nA.jpg",
     "https://i.imgur.com/TvgODgE.jpg",
     "https://i.imgur.com/vIBxhrD.jpg",
     "https://i.imgur.com/RJvTGPc.jpg",
     "https://i.imgur.com/bwIMkRM.jpg",
     "https://i.imgur.com/dJyMPKb.jpg",
     "https://i.imgur.com/CF1REvb.jpg",
     "https://i.imgur.com/7BZI3Aw.jpg",
     "https://i.imgur.com/RAHnJZX.jpg",
     "https://i.imgur.com/evkUWyk.jpg",
     "https://i.imgur.com/rStVRIk.jpg",
     "https://i.imgur.com/qFe1TVr.jpg",
     "https://i.imgur.com/8RpAroY.jpg",
     "https://i.imgur.com/z6dlAn3.jpg",
     "https://i.imgur.com/fY5PpbL.jpg",
     "https://i.imgur.com/SkpzfPM.jpg",
     "https://i.imgur.com/dyJLuYN.jpg",
     "https://i.imgur.com/kUjlYBk.jpg",
     "https://i.imgur.com/s2atBOe.jpg",
     "https://i.imgur.com/HFNEoY5.jpg",
     "https://i.imgur.com/MxBAE3i.jpg",
     "https://i.imgur.com/odmCEQw.jpg",
     "https://i.imgur.com/NA028eN.jpg",
     "https://i.imgur.com/klHjp8a.jpg",
     "https://i.imgur.com/AXVUcPI.jpg",
     "https://i.imgur.com/24Sj7Rt.jpg",
     "https://i.imgur.com/jBasCnM.jpg",
     "https://i.imgur.com/NTN2r0p.jpg",
     "https://i.imgur.com/qn1MCu6.jpg",
     "https://i.imgur.com/f66CPIM.jpg",
     "https://i.imgur.com/nlvpxyB.jpg",
     "https://i.imgur.com/NQDolOM.jpg",
     "https://i.imgur.com/HnuN8y3.jpg",
     "https://i.imgur.com/938FGA9.jpg",
     "https://i.imgur.com/qKg4GZp.jpg",
     "https://i.imgur.com/Z7lzVgs.jpg",
     "https://i.imgur.com/CzqF4hz.jpg",
     "https://i.imgur.com/piBubnc.jpg",
     "https://i.imgur.com/0aS3h2H.jpg",
     "https://i.imgur.com/fD7X58t.jpg",
     "https://i.imgur.com/9KvVzL8.jpg",
    ];
   var callback = () => api.sendMessage({body:`Ảnh 18+\nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };