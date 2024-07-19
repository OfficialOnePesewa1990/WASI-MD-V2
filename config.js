//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "233544482494";
global.owner = process.env.OWNER_NUMBER || "233544482494";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BkNlFOZC8xb2xJQkNQYWJOQXlLcHRrWnVteDAwa1VLNE8ycEdtY2xWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm9iZzRLWTZUNnJLNVp5ellzVTRBY2VieDM5ZnhMOFNMN2Z1dlpaczdCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRkhTUkZ0cklTOXg1ZlZkeFF3eGwzWHJKbHJ3Qmd2cXp2UnFJUzQrZ1VFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRjVDaEpjQzFHdU0wMHdKL3B0NTJUeDIweXpYOE9QRm9INEx0L1JpdDJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQRDJ5N25FQ1hMYmxMUnFyTFljMEgzNVB5L04rVTRoa2xsTUswYVplMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ0MjN4cUxXL09EeVdRU2hlM3g2TWZQMHk4cjFjaUpQN1JPZUtUd0ZyQXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZuTGRqNm9pL2IvM1BWSStCdzI0VVhRTDU0ejNLaEJSZi9PZW1BbGdHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUg1ZStDQUIrRHlDQmtxYWp6cXdXa3hOY202VGJVbUprY3pYaEtMcFl4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE1NG1UanN1UVdFbkVKV0VadHIxdWdJdEx3Q2JIeWNrMjhoSTFtR0hNcGVjNSs2cnRGNFQ0d3Uyem55cHp4bG9RbG9WYnY0SVZlTnQwa2U3U3FVbUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJxUjJWS1A1ZXNDM1YwN0krcmNPcVd3WElvYTlLd0tzMFJDU3ppR2czMGpRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyV0Y4Tm5fWlI5Ry11dVpJQ0NVSmd3IiwicGhvbmVJZCI6ImRhZDQzZWJiLWJkYzYtNDE2Ny1iYmY3LTUwOTgyZTA4YzM5MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrbEZTREUxS3k5dytpbS9iTTh1OWtlRCtzc3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUW0xc3Z6Q2ZiVVN1TmRMWGxjTzJ0TlVHNy8wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5aUTNaWEtLIiwibWUiOnsiaWQiOiIyMzM1NDQ0ODI0OTQ6OTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BqOTRaSUhFTkd0NmJRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkF2YVFQU3FUWmlveDJ5Z201TFFCYXY5cWQ0d3p4eVdiTmgvSjl4blN5U3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNxK24yRGxEN3g0TGdUM1ZtNDgrdnZQTldlNGppTXhKbHZQT3BneU1WaFpQUTMrUW1NQkNNWDBpRWpiR1BHREIvL0tyOWZxQ0dHYnpNWm1wVTVpREJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUemtlQWMycXN0d1l2QW1zQjlmYnJrK2hiSHBXZDdDQWJQekZiZGxtQ2hHbHREeFUySTA2THkvaHdjL3F4anlQWmE4ZEdlMmV4d3RSSTYyVDdVemlDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU0NDQ4MjQ5NDo5NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTDJrRDBxazJZcU1kc29KdVMwQVdyL2FuZU1NOGNsbXpZZnlmY1owc2tyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzkwODE0LCJteUFwcFN0YXRlS2V5SWQiOiJBRFVBQU1JYSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-OFFICIAL-ONEPESEWA😍",
  author: process.env.PACK_AUTHER || "OFFICIAL ONEPESEWA",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "OFFICIAL ONEPESEWA-BOT",
  ownername: process.env.OWNER_NAME || "OFFICIAL ONEPESEWA",
  errorChat: process.env.ERROR_CHAT || "233544482494",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "OFFICIAL ONEPESEWA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
