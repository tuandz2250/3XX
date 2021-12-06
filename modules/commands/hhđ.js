const fs = require("fs");
module.exports.config = {
	name: "hhđ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MinVu", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hhđ")==0 || (event.body.indexOf("hhđ")==0)) {
		var msg = {
				body: "Vì lòng anh quá thương em, quá yêu em, nhớ thương em anh đợi em về!!💞",
				attachment: fs.createReadStream(__dirname + `/noprefix/hhđ.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}