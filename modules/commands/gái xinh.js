const fs = require("fs");
module.exports.config = {
	name: "gái xinh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mod by HChong", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "gái xinh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gái xinh")==0 || (event.body.indexOf("Gái xinh")==0)) {
		var msg = {
				body: "Đốc Cờ Lê ❤️",
				attachment: fs.createReadStream(__dirname + `/cache/gaixinh.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}