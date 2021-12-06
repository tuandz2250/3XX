module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`>> ${global.config.PREFIX} << • ${(!global.config.BOTNAME) ? "🌸𝐄𝐲𝐨 𝐖𝐡𝐚𝐭 𝐒𝐡𝐮𝐩 𝐀 Đ𝐨̛̀ 𝐋𝐨̂ 𝐀𝐧𝐡 𝐄𝐦 ♥️ 𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ 𝐁𝐨𝐭 𝐓𝐮𝐚̂́𝐧 𝐃𝐞𝐞𝐩𝐓𝐫𝐲, 𝐃𝐮̀𝐧𝐠 /𝐡𝐞𝐥𝐩 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐀𝐥𝐥 𝐋𝐞̣̂𝐧𝐡 𝐍𝐡𝐞́ 𝐇𝐨𝐚̣̆𝐜 /𝐦𝐞𝐧𝐮 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭🌸" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`🌸𝐄𝐲𝐨 𝐖𝐡𝐚𝐭 𝐒𝐡𝐮𝐩 𝐀 Đ𝐨̛̀ 𝐋𝐨̂ 𝐀𝐧𝐡 𝐄𝐦 ♥️ 𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ 𝐁𝐨𝐭 𝐓𝐮𝐚̂́𝐧 𝐃𝐞𝐞𝐩𝐓𝐫𝐲, 𝐃𝐮̀𝐧𝐠 /𝐡𝐞𝐥𝐩 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐀𝐥𝐥 𝐋𝐞̣̂𝐧𝐡 𝐍𝐡𝐞́ 𝐇𝐨𝐚̣̆𝐜 /𝐦𝐞𝐧𝐮 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭🌸`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinMp4");
			const pathGif = join(path,`hi.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝕮𝖍à𝖔 𝕸ừ𝖓𝖌 𝕰𝖒 𝖄ê𝖚 {name}.\n 𝕥ớ𝕚 𝕧ớ𝕚 𝕟𝕙ó𝕞 {threadName}.\n{type} 𝕝à 𝕖𝕞 𝕚𝕦 𝕥𝕙ứ {soThanhVien} 𝕔ủ𝕒 𝔹𝕆𝕋 🥲" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}