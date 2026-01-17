function Main(value) {

    const Text = value.toLowerCase();

    document.getElementById('typesomething').Text = '';

    if (Text == '' || Text == ' ') {
        message = '请输入文本'
    } else if (Text == 'xmm' || Text == 'xmm010') {
        message = 'bruh.'
    } else if (Text == '447' || Text == '447_') {
        message = '燃尽了。'
    } else if (Text == 'chara') {
        message = '* Hello.'
        window.location.href = '/files/html/chara.html'
    } else if (Text == 'ciallo' || Text == 'Ciallo' || Text == 'Ciallo~' || Text == 'ciallo~') {
        message = '诶柚子厨真的是'
        ChangeWebsite('/files/html/ciallo.html')
    } else if (Text == 'cirno' || Text == 'baka' || Text == '⑨' || Text == '9' || Text == '琪露诺' || Text == '笨蛋') {
        message = '⠀⠀⠀⣠⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀\n⠀⠀⡜⠁⠀⠈⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠷⠶⠱⡄\n⠀⢸⣸⣿⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠫⢀⣖⡃⢀⣸⢹\n⠀⡇⣿⣿⣶⣤⡀⠀⠀⠙⢆⠀⠀⠀⠀⠀⣠⡪⢀⣤⣾⣿⣿⣿⣿⣸\n⠀⡇⠛⠛⠛⢿⣿⣷⣦⣀⠀⣳⣄⠀⢠⣾⠇⣠⣾⣿⣿⣿⣿⣿⣿⣽\n⠀⠯⣠⣠⣤⣤⣤⣭⣭⡽⠿⠾⠞⠛⠷⠧⣾⣿⣿⣯⣿⡛⣽⣿⡿⡼\n⠀⡇⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣮⡛⢿⠃\n⠀⣧⣛⣭⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣷⣎⡇\n⠀⡸⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣷⣟⡇\n⣜⣿⣿⡧⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⣸⣿⡜⡄\n⠉⠉⢹⡇⠀⠀⠀⢀⣞⠡⠀⠀⠀⠀⠀⠀⡝⣦⠀⠀⠀⠀⢿⣿⣿⣹\n⠀⠀⢸⠁⠀⠀⢠⣏⣨⣉⡃⠀⠀⠀⢀⣜⡉⢉⣇⠀⠀⠀⢹⡄⠀⠀\n⠀⠀⡾⠄⠀⠀⢸⣾⢏⡍⡏⠑⠆⠀⢿⣻⣿⣿⣿⠀⠀⢰⠈⡇⠀⠀\n⠀⢰⢇⢀⣆⠀⢸⠙⠾⠽⠃⠀⠀⠀⠘⠿⡿⠟⢹⠀⢀⡎⠀⡇⠀⠀\n⠀⠘⢺⣻⡺⣦⣫⡀⠀⠀⠀⣄⣀⣀⠀⠀⠀⠀⢜⣠⣾⡙⣆⡇⠀⠀\n⠀⠀⠀⠙⢿⡿⡝⠿⢧⡢⣠⣤⣍⣀⣤⡄⢀⣞⣿⡿⣻⣿⠞⠀⠀⠀\n⠀⠀⠀⢠⠏⠄⠐⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠳⢤⣉⢳⠀⠀⠀\n⢀⡠⠖⠉⠀⠀⣠⠇⣿⡿⣿⡿⢹⣿⣿⣿⣿⣧⣠⡀⠀⠈⠉⢢⡀⠀\n⢿⠀⠀⣠⠴⣋⡤⠚⠛⠛⠛⠛⠛⠛⠛⠛⠙⠛⠛⢿⣦⣄⠀⢈⡇⠀\n⠈⢓⣤⣵⣾⠁⣀⣀⠤⣤⣀⠀⠀⠀⠀⢀⡤⠶⠤⢌⡹⠿⠷⠻⢤⡀\n⢰⠋⠈⠉⠘⠋⠁⠀⠀⠈⠙⠳⢄⣀⡴⠉⠀⠀⠀⠀⠙⠂⠀⠀⢀⡇\n⢸⡠⡀⠀⠒⠂⠐⠢⠀⣀⠀⠀⠀⠀⠀⢀⠤⠚⠀⠀⢸⣔⢄⠀⢾⠀\n⠀⠑⠸⢿⠀⠀⠀⠀⢈⡗⠭⣖⡒⠒⢊⣱⠀⠀⠀⠀⢨⠟⠂⠚⠋⠀\n⠀⠀⠀⠘⠦⣄⣀⣠⠞⠀⠀⠀⠈⠉⠉⠀⠳⠤⠤⡤⠞⠀⠀⠀⠀⠀'
    } else if (Text == 'fuck' || Text == 'fuckyou' || Text == 'fuck you' || Text == 'shit' || Text == 'bitch') {
        message = 'bro怎么说藏话了:('
    } else if (Text == 'koishi' || Text == '514' || Text == '无意识' || Text == 'komejikoishi' || Text == 'komeji koishi' || Text == '古明地恋') {
        message = '恋恋天下第一'
    } else if (Text == 'satori' || Text == '古明地觉' || Text == 'komejisatori' || Text == 'komeji satori' || Text == '觉' || Text == '5' || Text == '⑤') {
        message = '"觉"了'
    } else if (Text == '0721' || Text == 'onani' || Text == '才十二一' || Text == 'オナニー') {
        message = '瓦塔西诺欧那尼米得库打赛'
        ChangeWebsite('https://0d00.cn/')
    } else if (Text == '💥' || Text == '爆炸' || Text == 'boom') {
        message = '爆炸了。'
    } else {
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