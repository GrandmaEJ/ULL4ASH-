module.exports = {
 config: {
	 name: "bby6",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "baby") {
 return message.reply({
 body: "     「𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆-----ᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hmWXlcP.mp4")
 });
 }
 }
}