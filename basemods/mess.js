require("./global")

const mess = {
   wait: "_Wait Kak Lagi Proses⏳_",
   success: "_Sukses Full_`",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kocak?",
       link: "Link Nya Mana Kocak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "_Maaf! Fitur Ini Hanya Bisa Digunakan Di Dalam Group_",
       private: "_Maaf! Fitur Ini Hanya Bisa Digunakan Di Dalam Private Chat_",
       owner: "_Maaf! User Lain Dilarang Keras Mengunakan Fitur Ini! Kerana Fitur Ini Khusus Owner Bot⚠️_",
       admin: "_Maaf! Fitur Ini Hanya Bisa Digunakan Sama Owner Bot_",
       badmin: "*Maaf! Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group*",
       premium: "*MAAF KAMU BELUM JADI USER PREMIUM! UNTUK MENJADI USER PREMIUM SILAKAN HUBUNGI OWNER DENGAN CARA KETIK .owner*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})