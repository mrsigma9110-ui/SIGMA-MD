const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NRYklKNngzME8xU2lyRGdPYXpMS0NPMlRzdGs4S2ZpMmEwRnVha3kxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFhUTjJneXhVajhtaFB6eUNyMmFJWGJQMWx6d2dTeE1MMDZqMEgxb1Fncz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSmRKZW9zTy9jZ0FUYUNqYk1ZRkFCNWQ3bkxUZUY3SnRtb1JpOWZBSVhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSjlHVTJKWk9jd3JxTHdxQlVkRlhodU45WnBJQlV5WmFyeFE3TGVCUWhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNSzR0N0RnbVJTQjVmeTJocDhYYXlLc3RlVDJmSGliYU9hNEk1K0xTMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijhzb0k0S1NPUVNGeGRnUTFWVHVXV1M3ZHpNWFc1K0tRaTYrNmFXSDN6anc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pBZXNFenhIeHo1SjI2WmlzODQxQW9WeFZvbGRGVGZXV1ZkMUs5dHozaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUkwSCtRWE4vUjJ2TDNRVXBCTjlaenpiaGVmS05uTlRkcXByM3BNRGlRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZGWVZBUU1CSXJHMUxkWHdhaHZKd3FZb28yQjZZM2hoQWVuM1I5WkxMODdKeFlsZk15eFVtSFNITFI2VjFnQTNNaTAyUTB3VjZpalJ2d3dJSXNkOGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiI5anJ1eXFQOVJHeklRZUcrZzd6c2orTlJZbStKVnV5U240M3FOOFhKZ3ZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA4MTM2NDE5MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM5REI1RUYwRDJDNDE2MkE3QUZFOEFCQ0MwN0VDMjUiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MTAzNjAwMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDgxMzY0MTkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzRERTQ1ODU2MUVCQjQ2MjRFOTg0OUQyRENENzhEOSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxMDM2MDAxfV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllNUE1LUzU4IiwibWUiOnsiaWQiOiI5MjMwODEzNjQxOTE6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExNDE2MDkxODYxMDA1NjozQGxpZCIsIm5hbWUiOiLwk4ap8J2ZjvCdmYTwnZmC8J2ZiPCdmLwg8J2YvfCdmYrwnZmU8JOGqi3wn5KA8J+lgiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3lNd0hrUTBPZWgwUVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWlpycGNydnlvUUt1SVkydjl2Z3RLbUt1dVYwVzc1VWh3N09YdnRoenBrOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiek0xODZKMU1EQVpycnJSbUJ0RnNVR0tEaDNKaWRsTjd3QXhVdUF2S1BKY2ZneU5uM3J0R0h1U0FOR0hWR2RibzdzajNCVUpwMldPdHpVNGk1YjZBREE9PSIsImRldmljZVNpZ25hdHVyZSI6IngyTlN2bUtJNmRHTXdwMkc1RUgxR05NRFVlOGc1TWxEVlJ5RVJrRDVOYkltbWdzM3k4WG56TUNPYURVVVhFVFc4WW5UNHdtL2xaY0doUVFLOEdKb2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTE0MTYwOTE4NjEwMDU2OjNAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldXYTZYSzc4cUVDcmlHTnIvYjRMU3BpcnJsZEZ1K1ZJY096bDc3WWM2WlAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZ2dGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MTAzNjAwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFZ2QiLCJsYXN0UHJvcEhhc2giOiI0WlFrd08ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SIGMA-MD💀 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "<img src="https://img.sanishtech.com/u/84db4cdcfb4bc8b59d6a852614eeb36f.jpg" alt="1000230302" loading="lazy" style="max-width:100%;height:auto;">",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SIGMA-MD💀",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SIGMA-MD💀",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_Number || "923234483743",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SIGMA-MD OFFICIAL 💀*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SIGMA-MD💀*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "<img src="https://img.sanishtech.com/u/84db4cdcfb4bc8b59d6a852614eeb36f.jpg" alt="1000230302" loading="lazy" style="max-width:100%;height:auto;">",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
