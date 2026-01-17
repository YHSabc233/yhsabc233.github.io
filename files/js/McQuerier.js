function UUIDQuery(PlayerName) {
    if (PlayerName!=='') {
    window.location.href = 'https://api.mojang.com/users/profiles/minecraft/' + PlayerName
    } else {alert('输入框内容无效！')}
}

function GetData() {

var iframe = document.getElementById('McQuerierResult').contentWindow.document.body.innerText;
var Display = iframe

    alert(Display)
}