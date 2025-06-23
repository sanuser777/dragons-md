const fs = require("fs");
const path = require("path");

module.exports = (sock) => {
  const dirPath = path.join(__dirname, "../plugins");
  fs.readdirSync(dirPath).forEach(file => {
    const plugin = require(path.join(dirPath, file));
    if (plugin && plugin.pattern && typeof plugin.handler === "function") {
      console.log(`✅ Loaded: ${file}`);
      sock.ev.on('messages.upsert', async (msg) => {
        const m = msg.messages[0];
        if (!m.message || m.key.fromMe) return;

        const text = m.message.conversation || m.message.extendedTextMessage?.text || '';
        if (text.startsWith(plugin.pattern)) {
          const args = text.trim().split(/\s+/).slice(1);
          plugin.handler(m, {
            args,
            sock,
            m,
          });
        }
      });
    }
  });
};
