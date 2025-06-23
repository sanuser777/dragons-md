module.exports = {
  pattern: ".fancy",
  fromMe: false,
  desc: "Convert text to fancy style",
  type: "text",
  async handler(m, { args }) {
    const text = args.join(" ");
    if (!text) return m.reply("❌ Please provide text.");
    const styled = `🅑🅛 🅓🅡🅐🅖🅞🅝 - 🅜🅓 𝓕𝓪𝓷𝓬𝔂: ${text}`;
    return m.reply(styled);
  }
};
