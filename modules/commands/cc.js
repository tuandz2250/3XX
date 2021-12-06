const fs = require("fs");
module.exports.config = {
	name: "cc",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mod by HChong", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "cc",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cc")==0 || (event.body.indexOf("Cc")==0)) {
		var msg = {
				body: "Địt mẹ mày chửi cc cái cc",
				attachment: fs.createReadStream(__dirname + `/noprefix/chuicaicc.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}