const chalk = require("chalk")
const fs = require("fs")

// Apikey 
global.apikeys = 'UnlimitedPremiumXyroineeID'
// Note: Kalau Lu Gada Apikeynya Daftar Dulu Biar Semua Fiturnya Aktif, Webnya Di Bawah Ya
// • https://api.xyroinee.xyz

// Panel Njing
global.domain = "https://zrstore.panelrun.xyz" // 
global.apikey = 'ptla_HpvztajQnN7c0gcMQsoS4J6PPIWqEUlpktzi4eIpsuw' // Isi Apikey Plta Lu
global.capikey = 'ptlc_VVBc2zOOrSu54l9ZRanXfpz1rfNRONIIxuBxRNei0rM' // Isi Apikey Pltc Lu
global.email = 'elistz21@gmail.com'
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

// Info Owner
global.owner = ['6285760451683']
global.nomorown = "6285760451683"
global.ownername = "Xyroınee-ID."
global.ownerNumber = ["6285760451683@s.whatsapp.net"]
global.creator = "6285760451683@s.whatsapp.net"
global.author = "Clara - MD"
global.location = "Indonesia"

//Bot Setting
global.botname = "Clara - MD"
global.wm = "Follow Instagram: danilelistz02"
global.packname = "Sticker By"
global.prefa = ['','!','.','#','&','`']
global.hituet = 0

// Social Media
global.yt = "https://www.youtube.com/@Xyroinee"
global.gh = "https://github.com/Xyroinee"
global.ig = "https://instagram.com/danilelistz02"
global.fb = "https://facebook.com/danilelistz19"
global.web = "https://xyroinee.xyz"
global.gcwa = "https://chat.whatsapp.com/DvcQaFvh9nL0TSGidAtdHc"

// Foto Bot
global.thumb = fs.readFileSync("./media/clara.jpg")

// Message/Pesan
global.mess = {
    success: '_Berhasil Di Proses!',
    admin: '_Maaf Kak, Tapi Fitur Ini Hanya Bisa Digunakan Oleh Admin Grup_',
    botAdmin: '_Jadikan Saya Sebagai Admin Terlebih Dahulu Agar Dapan Mengaktifkan Fitur Ini_',
    prem: '_Fitur Ini Khusus Premium Kak, Jika Ingin Menjadi User Premium Ketik .premium Atau Hubungin Owner_',
    owner: '_Maaf Kak, Tapi Fitur Ini Hanya Bisa Digunakan Oleh Ownerku_',
    group: '_Fitur Ini Hanya Bisa Di Pakai Di Dalam Grup_',
    private: '_Fitur Ini Hanya Bisa Di Pakai Di Dalam Chat Pribadi_',
    bot: 'Fitur Khusus Bot',
    wait: '_Sedang Di Proses, Mohon Tunggu_...',
    link: '_Uhm...Linknya Mana?',
    Limit: 'Limit Kamu Sudah Habis, Limit Akan Di Reset Setiap Jam 00.00',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})