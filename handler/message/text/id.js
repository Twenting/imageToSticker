exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari Source code / bot ini.
- Source code / bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/YogaSakti/imageToSticker
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best regards, Yoga Sakti.`
}

exports.textMenu = (pushname) => {
    return `

Hallo, $ {pushname}! 👋️
Hier zijn enkele van de kenmerken van deze bot! ✨
Sticker maker:
1. * # sticker *
Om de afbeelding in een sticker te veranderen.
Gebruik: stuur afbeeldingen met het onderschrift #sticker of beantwoord afbeeldingen die zijn verzonden met #sticker
2. * # sticker * _ <Afbeeldings-URL> _
Om de afbeelding van de url naar een sticker te veranderen.
Gebruik:
3. * # gifsticker * _ <Giphy URL> _ / * # stickergif * _ <Giphy URL> _
Om een ​​gif in een sticker te veranderen (alleen Giphy)
Gebruik: stuur berichten met het formaat * gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*
4. * # memesticker * _ <bovenste tekst> _ | _ <onderste tekst> _
Om een ​​stickermeme te maken met tekst aan de boven- en onderkant
Gebruik: stuur afbeelding met bijschrift _ * # meme top me | u onder * _, of u kunt ook reageren op een bestaande afbeelding.
Downloader:
1. * # tiktok * _ <tiktok url> _
Om video's van video te downloaden tiktok.
Gebruik: stuur berichten met het formaat * # tiktok https://www.tiktok.com/@itsandani/video/6869248690381425922*
2. * # fb * _ <post / video url> _
Om video's van Facebook te downloaden.
Gebruik: stuur bericht met het formaat * # fb https://www.facebook.com/.....*
3. * # ig * _ <url Instagram-bericht> _
Om foto's en video's van Instagram te downloaden.
Gebruik: stuur berichten met het formaat * # ig https://www.instagram.com/p/BPOd1vhDMIp/*
4. * # twt * _ <twitter post url> _
Om foto's en video's van Twitter te downloaden.
Gebruik: stuur bericht met het formaat * # twt https://twitter.com/ntsana_/status/1306108656887324672*
Enzovoort:
1. * # translate * _ <taalcode> _
Om berichten in de opgegeven taal te interpreteren.
Gebruik: Beantwoord / citeer / beantwoord het bericht dat u wilt vertalen met _ * # translate id * _ <- id is de taalcode. taalcode is te zien op * https: //bit.ly/33FVldE*
2. * # bon * _ <kurir> _ _ <bonnummer> _
Om de leveringsstatus van goederen te controleren, lijst met koeriers: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Gebruik: stuur bericht met het formaat _ * # resi jne 1238757632 * _
3. * # meme * _ <bovenste tekst> _ | _ <onderste tekst> _
Om een ​​meme te maken met tekst bovenaan en onderaan
Gebruik: stuur afbeelding met bijschrift _ * # meme top me | u onder * _, of u kunt ook reageren op een bestaande afbeelding.
4. * # controleer locatie *
Controleer de locatie van de verspreiding van covid-19 in het gebied om je heen (kelurahan).
Gebruik: stuur uw locatie en beantwoord / citeer / beantwoord de locatie die u hebt verzonden met _ * # controleer locatie * _
5. * # tnc *
Toont algemene voorwaarden voor bot.
6. * # donatie *
donatie-informatie weergeven.
Ik hoop dat je een geweldige dag hebt! ✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!

1. *#kick* @user
Untuk mengeluarkan member dari grup (bisa lebih dari 1).

2. *#promote* @user
Untuk mempromosikan member menjadi Admin grup.

3. *#demote* @user
Untuk demosikan Admin grup.

4. *#tagall*
Untuk mention semua member grup. (Premium Only)

5. *#del*
Untuk menghapus pesan bot (balas pesan bot dengan #del)`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi melalui link berikut:
1. Saweria: https://saweria.co/yogasakti
2. Trakteer: https://trakteer.id/red-emperor 

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
