const fs = require("fs");
module.exports.config = {
	name: "anh là sad boy",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "anh là sad boy",
	commandCategory: "Không cần dấu lệnh",
	usages: "Anh là sad boy",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("anh là sad boy")==0 || (event.body.indexOf("Anh là sad boy")==0)) {
		var msg = {
				body: "Anh yêu em vì anh ngu như chó",
				attachment: fs.createReadStream(__dirname + `/noprefix/anhlasadboy.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}