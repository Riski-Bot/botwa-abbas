let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [08995820020]
│ • Tri [08995820020]
│ • Pulsa [08995820020]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/628995820020
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
