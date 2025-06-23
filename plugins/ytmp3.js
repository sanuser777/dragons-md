const axios = require("axios");
module.exports = {
  pattern: ".ytmp3",
  fromMe: false,
  desc: "Download YouTube audio",
  type: "downloader",
  async handler(m, { args }) {
    const url = args[0];
    if (!url) return m.reply("❌ Provide YouTube URL.");
    const api = `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(url)}`;
    try {
      const { data } = await axios.get(api);
      if (!data.result || !data.result.url) return m.reply("❌ Failed to get audio.");
      return m.sendMessage(m.jid, { audio: { url: data.result.url }, mimetype: 'audio/mp4' }, { quoted: m });
    } catch (e) {
      return m.reply("❌ Error fetching BL DRAGON audio.");
    }
  }
};
