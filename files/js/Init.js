function Init() {
    const Cookie = document.cookie
    if (Cookie=='UserColorScheme=Dark') {
        window.matchMedia('UserColorScheme: dark')
    } else {
        return 0;
    }
}