module.exports.config = {
  name: "idbox",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "VanHung",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Other",
  usages: "idbox",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  return api.sendMessage(`🌸 𝐓𝐄̂𝐍 𝐁𝐎𝐗 🌸\n${threadName}\n💛 𝐈𝐃 𝐁𝐎𝐗 💛\n${threadInfo.threadID}`, event.threadID, event.messageID);
}