const axios = require('axios');
module.exports = {
  pattern: ".logo",
  fromMe: false,
  desc: "Generate a logo image",
  type: "image",
  async handler(m, { args }) {
    const text = args.join(" ");
    if (!text) return m.reply("❌ Provide text for logo.");
    const url = `https://api.raganork.in/api/logo?text=${encodeURIComponent(text)}`;
    return m.sendMessage(m.jid, { image: { url }, caption: "Here is your BL DRAGON logo" });
  }
};
