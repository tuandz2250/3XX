module.exports.config = {
	name: "wibu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh Wibu",
	commandCategory: "Random-img",
	usages: "wibu",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://wibu.ocvat2810.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/wibu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/wibu.${ext}`)).on("close", callback);
			})
}