document.cookie = "username=JohnDoe; expires=" + new Date(Date.now() + 864e5 * 7).toUTCString() + "; path=/";






function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

console.log(getCookie("username"));