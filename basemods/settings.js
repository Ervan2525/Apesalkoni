require("./module")

global.owner = "48459087057"
global.namabot = "AsTäʀօ⸸h⁶⁶⁶"
global.namaCreator = "AsTäʀօ⸸h⁶⁶⁶"
global.autoJoin = false
global.antilink = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = 'https://logpanel.hykzhost.xyz' // Isi Domain Lu
global.apikey = 'ptla_0g84C426LtROx1S1AZJGuGnGwgAJbk6NwIV1Mdn0OmZ' // Isi Apikey Plta Lu
global.capikey = 'ptlc_zKXwNjOhj3EdPg3zllOcIP0VGSnlGuckH3ZledMZhOt' // Isi Apikey Pltc Lu
global.eggsnya = '20' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./basemods/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "AsTäʀօ⸸h⁶⁶⁶"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
