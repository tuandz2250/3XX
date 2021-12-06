/** Mod lại module "bot.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HChong",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin người điều hành bot:
Facebook: Nguyễn Minh Tuấn ( Tuấn Dz )
TikTok: Nope
UID: 1091264685
Giới tính: Men, Gất Men, Mạnh Mẽ 😼😼
Mối quan hệ: Độc thân
Link Facebook: https://www.facebook.com/TuannDzz123/`, event.threadID, event.messageID);