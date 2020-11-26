exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU DONASI ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╭───「 *Silahkan donasi dibawah ini* 」

├≽️⚜ *PULSA*: 0896-0141-6330

├───≽️「 *ABOUT* 」
 
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
├≽️☎️ WA : *${whatsapplu}*
 
├≽️📌 *Gunakan dengan bijak* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}!!
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
