const fs = require("fs");
module.exports.config = {
	name: "Dỗi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Dỗi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dỗi")==0 || (event.body.indexOf("Dỗi")==0)) {
		var msg = {
				body: "Nói To Thế Á 🥺",
				attachment: fs.createReadStream(__dirname + `/noprefix/doi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }