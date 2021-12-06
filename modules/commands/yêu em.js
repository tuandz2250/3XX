const fs = require("fs");
module.exports.config = {
	name: "yêu em",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mod by HChong", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "yêu em",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu em")==0 || (event.body.indexOf("Yêu em")==0)) {
		var msg = {
				body: "Lòng Này Nhói Đau 💔",
				attachment: fs.createReadStream(__dirname + `/cache/yeuemnhieu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}