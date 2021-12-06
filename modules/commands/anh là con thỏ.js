const fs = require("fs");
module.exports.config = {
	name: "Anh Là Con Thỏ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mod by HChong", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Anh Là Con Thỏ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("anh là con thỏ")==0 || (event.body.indexOf("Anh là con thỏ")==0)) {
		var msg = {
				body: "Em Là Em Bé Của Anh ><",
				attachment: fs.createReadStream(__dirname + `/cache/anhlacontho.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}