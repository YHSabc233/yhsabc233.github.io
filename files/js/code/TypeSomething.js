function Main(value) {

   document.getElementById('typesomething').value = '';

   if (value == 'xmm' || value == 'XMM' || value == 'xmm010' || value == 'XMM010') {
      message = 'bruh.'
   } else if (value == '447' || value == '447_') {
      message = '燃尽了。'
   } else if (value == 'chara' ){
      message = '* Hello.'
      window.location.href = '/files/html/chara.html'
   } else if (value == 'ciallo' || value == 'Ciallo' || value == 'Ciallo~' || value == 'ciallo~') {
      message = '诶柚子厨真的是'
      ChangeWebsite('/files/html/ciallo.html')
   } else if (value == 'Cirno' || value == 'cirno' || value == 'baka' || value == 'Baka' || value == '⑨' || value == '9' || value == '琪露诺' || value == '笨蛋') {
      message = '⠀⠀⠀⣠⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀\n⠀⠀⡜⠁⠀⠈⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠷⠶⠱⡄\n⠀⢸⣸⣿⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠫⢀⣖⡃⢀⣸⢹\n⠀⡇⣿⣿⣶⣤⡀⠀⠀⠙⢆⠀⠀⠀⠀⠀⣠⡪⢀⣤⣾⣿⣿⣿⣿⣸\n⠀⡇⠛⠛⠛⢿⣿⣷⣦⣀⠀⣳⣄⠀⢠⣾⠇⣠⣾⣿⣿⣿⣿⣿⣿⣽\n⠀⠯⣠⣠⣤⣤⣤⣭⣭⡽⠿⠾⠞⠛⠷⠧⣾⣿⣿⣯⣿⡛⣽⣿⡿⡼\n⠀⡇⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣮⡛⢿⠃\n⠀⣧⣛⣭⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣷⣎⡇\n⠀⡸⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣷⣟⡇\n⣜⣿⣿⡧⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⣸⣿⡜⡄\n⠉⠉⢹⡇⠀⠀⠀⢀⣞⠡⠀⠀⠀⠀⠀⠀⡝⣦⠀⠀⠀⠀⢿⣿⣿⣹\n⠀⠀⢸⠁⠀⠀⢠⣏⣨⣉⡃⠀⠀⠀⢀⣜⡉⢉⣇⠀⠀⠀⢹⡄⠀⠀\n⠀⠀⡾⠄⠀⠀⢸⣾⢏⡍⡏⠑⠆⠀⢿⣻⣿⣿⣿⠀⠀⢰⠈⡇⠀⠀\n⠀⢰⢇⢀⣆⠀⢸⠙⠾⠽⠃⠀⠀⠀⠘⠿⡿⠟⢹⠀⢀⡎⠀⡇⠀⠀\n⠀⠘⢺⣻⡺⣦⣫⡀⠀⠀⠀⣄⣀⣀⠀⠀⠀⠀⢜⣠⣾⡙⣆⡇⠀⠀\n⠀⠀⠀⠙⢿⡿⡝⠿⢧⡢⣠⣤⣍⣀⣤⡄⢀⣞⣿⡿⣻⣿⠞⠀⠀⠀\n⠀⠀⠀⢠⠏⠄⠐⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠳⢤⣉⢳⠀⠀⠀\n⢀⡠⠖⠉⠀⠀⣠⠇⣿⡿⣿⡿⢹⣿⣿⣿⣿⣧⣠⡀⠀⠈⠉⢢⡀⠀\n⢿⠀⠀⣠⠴⣋⡤⠚⠛⠛⠛⠛⠛⠛⠛⠛⠙⠛⠛⢿⣦⣄⠀⢈⡇⠀\n⠈⢓⣤⣵⣾⠁⣀⣀⠤⣤⣀⠀⠀⠀⠀⢀⡤⠶⠤⢌⡹⠿⠷⠻⢤⡀\n⢰⠋⠈⠉⠘⠋⠁⠀⠀⠈⠙⠳⢄⣀⡴⠉⠀⠀⠀⠀⠙⠂⠀⠀⢀⡇\n⢸⡠⡀⠀⠒⠂⠐⠢⠀⣀⠀⠀⠀⠀⠀⢀⠤⠚⠀⠀⢸⣔⢄⠀⢾⠀\n⠀⠑⠸⢿⠀⠀⠀⠀⢈⡗⠭⣖⡒⠒⢊⣱⠀⠀⠀⠀⢨⠟⠂⠚⠋⠀\n⠀⠀⠀⠘⠦⣄⣀⣠⠞⠀⠀⠀⠈⠉⠉⠀⠳⠤⠤⡤⠞⠀⠀⠀⠀⠀'
   } else if (value == 'fuck' || value == 'Fuck' || value == 'Fuckyou' || value == 'fuckyou' || value == 'fuck you' || value == 'Fuck you' || value == 'shit' || value == 'Shit' || value == 'bitch' || value == 'Bitch') {
      message = 'bro怎么说藏话了'
   } else if (value == 'koishi' || value == 'Koishi' || value == '514' || value == '无意识' || value == 'komejikoishi' || value == '古明地恋') {
      message = '恋恋天下第一'
   } else if (value == 'komeji' || value == 'Komeji' || value == 'satori' || value == 'Satori' || value == '古明地觉' || value == 'komejisatori' || value == '觉' || value == '5' || value == '⑤') {
      message = '"觉"了'
   } else if (value == '0721' || value == 'onani' || value == '才十二一' || value == 'オナニー') {
      message = '瓦塔西诺欧那尼米得库打赛'
      ChangeWebsite('https://0d00.cn/')
   } else if (value == '💥' || value == '爆炸' || value == 'boom') {
      message = '爆炸了。'
   }

   {
      var min = 0;
      var max = 8;
      var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   if (randomNum < 3) {
      message = 'what r u typing bro'
   } else
      if (randomNum > 5) {
         message = 'bro你在输入些什么'
      } else
         if (randomNum > 2 && randomNum < 6) {
            message = '404 Not Found XD'
         }
   alert(message)
}

function ChangeWebsite(URL) {
   window.location.href = URL
}

function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}