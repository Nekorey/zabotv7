let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081229640958]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [081229640958]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
