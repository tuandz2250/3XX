const fs = require("fs");
module.exports.config = {
	name: "Đập",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Đập",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("spam bot")==0 || (event.body.indexOf("Spam bot")==0)) {
		var msg = {
				body: "Ý Thức Như Con Cặc Thì Kiếm Bot Khác Xài 😏",
				attachment: fs.createReadStream(__dirname + `/noprefix/spam.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }