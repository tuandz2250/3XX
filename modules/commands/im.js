const fs = require("fs");
module.exports.config = {
name: "im đi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Đạo lý",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("câm mồm")==0 || (event.body.indexOf("Câm mồm")==0)) {
		var msg = {
				body: "Câm Mẹ Mồm Mày Vào Con Đĩ 😏",
				attachment: fs.createReadStream(__dirname + `/cache/cammom.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}