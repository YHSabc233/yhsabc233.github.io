function toggleMenu() {
    const menu = document.getElementById('menuContent');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function GetUsingDomainIs() {
    const Domain = window.location.hostname

    if(Domain=='192.168.0.73'){
        document.getElementById('UsingDomainIs').innerText = '你当前正在访问的站点为：内网开发地址';
    } else if(Domain=='www.yhsabc233.top'){
        document.getElementById('UsingDomainIs').innerText = '你当前正在访问的站点为：Github Pages';
    } else if(Domain=='blog.yhsabc233.top'){
        document.getElementById('UsingDomainIs').innerText = '你当前正在访问的站点为：Cloudflare Pages'
    }

}