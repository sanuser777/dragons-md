const axios = require("axios");

exports.getBuffer = async (url, options = {}) => {
  try {
    const res = await axios({
      method: "get",
      url,
      headers: { DNT: 1, "Upgrade-Insecure-Request": 1 },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

exports.fetchJson = async (url, options) => {
  try {
    const res = await axios({ method: "GET", url, ...options });
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024, dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
