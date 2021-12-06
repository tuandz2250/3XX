const fs = require("fs");
module.exports.config = {
	name: "Chia tay",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Chia tay",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chia tay")==0 || (event.body.indexOf("Chia tay")==0)) {
		var msg = {
				body: "Vì Sao Vậy ? 💔",
				attachment: fs.createReadStream(__dirname + `/noprefix/toihieu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}