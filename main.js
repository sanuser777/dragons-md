const { default: makeWASocket } = require('@whiskeysockets/baileys');
const { useSingleFileAuthState } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const { state, saveState } = useSingleFileAuthState('./session.json');
const loader = require('./lib/loader');

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  sock.ev.on('connection.update', (update) => {
    const { connection } = update;
    if(connection === 'close') {
      console.log("Disconnected. Reconnecting...");
      startBot();
    } else if(connection === 'open') {
      console.log("✅ BL DRAGON -MD Connected to WhatsApp");
    }
  });

  await loader(sock);
  sock.ev.on('creds.update', saveState);
}

startBot();
