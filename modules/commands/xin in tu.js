const fs = require("fs");
module.exports.config = {
	name: "xin info",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mod by HChong", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "xin info",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xin info")==0 || (event.body.indexOf("Xin info")==0)) {
		var msg = {
				body: "Em không follow anh mà đòi xin in tư của anhhhh 😭",
				attachment: fs.createReadStream(__dirname + `/cache/intu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}