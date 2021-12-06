const fs = require("fs");
module.exports.config = {
	name: "chữ ký",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mod by HChong", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "chữ ký",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("admin")==0 || (event.body.indexOf("Admin")==0)) {
		var msg = {
				body: "Gì Muốn Xin Chữ Ký Hả ! Cầm Lấy Rồi Đi Đi 💓",
				attachment: fs.createReadStream(__dirname + `/cache/chuky.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}