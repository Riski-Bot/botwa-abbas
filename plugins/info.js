let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Abbas Gans
Script: @Nurotomo
Github: 
Rahasia tod

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @abbas_x_ploite
➥ YouTube:
https://www.youtube.com/channel/UC0ECqULbTSD0Wiz8mz0wTVw

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Pulsa: 0899-5820-020
╠➥ Tri: 0899-5820-020
╠➥ Pulsa: 0899-5820-020
║>Request? Wa.me/628995820020
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

