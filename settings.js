const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['989175142780']
global.premium = ['989175142780']
global.ownernomer = '989175142780'
global.ownername = 'ШHłТΞ HΛϾКΞЯS'
global.botname = '[🇱🇰SATA 𝛃𝚯𝚪🤘]'
global.footer = '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷'
global.ig = 'wa.me/989175142780'
global.sc = 'wa.me/989175142780'
global.myweb = 'wa.me/989175142780'
global.packname = '[🇱🇰SATA 𝛃𝚯𝚪🤘]'
global.author = 'ШHłТΞ HΛϾКΞЯS'
global.sessionName = 'جلسه'
global.region = 'Sri Lanka'
global.reactmoji = '🎭'
global.prefa = ['','!','.','🇱🇰','⚙️','🤘']
global.sp = '⭔'
global.mess = {
    success: 'انجام شد,
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'ربات را ابتدا ادمین کنید,
    owner: 'فقط مالک ربات میتواند از این دستور استفاده کند!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: '⏳لطفا صبر  کنید,
    error: 'خطا! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily لیمیت خورده است Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./src/logo.jpeg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
