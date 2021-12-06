module.exports.config = {
  name: "6mui",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Random ảnh 6 múi",
  commandCategory: "random-img",
  usages: "6mui",
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
"https://i.imgur.com/R9mb2d6.jpg",
"https://i.imgur.com/HmDpGbJ.jpg",
"https://i.imgur.com/8QT9gp6.jpg",
"https://i.imgur.com/gggc27P.jpg",
"https://i.imgur.com/fEUM8lM.jpg",
"https://i.imgur.com/56Sreb3.jpg",
"https://i.imgur.com/z8UA5Um.jpg",
"https://i.imgur.com/8GVBIW6.jpg",
"https://i.imgur.com/7Htu5DT.jpg",
"https://i.imgur.com/9SLPUKV.jpg",
"https://i.imgur.com/e4U5Vn4.jpg",
"https://i.imgur.com/vPbQ2Ht.jpg",
"https://i.imgur.com/yAjSU15.jpg",
"https://i.imgur.com/YLPpZez.jpg",
"https://i.imgur.com/37oxZsG.jpg",
"https://i.imgur.com/9KEdMAS.jpg",
"https://i.imgur.com/Aa1mLCK.jpg",
"https://i.imgur.com/noUwCUD.jpg",
"https://i.imgur.com/LfLGFf9.jpg",
"https://i.imgur.com/xQUyXYV.jpg",
"https://i.imgur.com/jPnWf94.jpg",
"https://i.imgur.com/iopMHOA.jpg",
"https://i.imgur.com/z5qp5tf.jpg",
"https://i.imgur.com/SRnN7T7.jpg",
"https://i.imgur.com/ThQ03aI.jpg",
"https://i.imgur.com/BfZVzDD.jpg",
"https://i.imgur.com/iXeO5nt.jpg",
"https://i.imgur.com/91qzXZo.jpg",
"https://i.imgur.com/rTDXMzw.jpg",
"https://i.imgur.com/plgVWrd.jpg",
"https://i.imgur.com/Ujdiy4M.jpg",
"https://i.imgur.com/OGsxRQC.jpg",
"https://i.imgur.com/g0JzxG5.jpg",
"https://i.imgur.com/8a2fLTJ.jpg",
"https://i.imgur.com/LRrXmx3.jpg",
"https://i.imgur.com/W8IhD4v.jpg",
"https://i.imgur.com/XlKZtTH.jpg",
"https://i.imgur.com/cuectq9.jpg",
"https://i.imgur.com/EsyfaJp.jpg",
     ];
     var callback = () => api.sendMessage({body:`Bớt Ghiền Lại Đi -.-`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };