
function setCookie(exdays, name) {
  var url = new URL(window.location.href);
  var value = url.searchParams.get(name);
  if (value != null) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";domain=likeup.me";
  }
}

function setCookieWithValue(exdays, name, value) {
  var url = new URL(window.location.href);
  if (value != null) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";domain=likeup.me";
  }
}

setCookie(30, "ref_username")
setCookie(30, "utm_source")
setCookie(30, "utm_campaign")
setCookie(30, "utm_medium")
setCookie(30, "utm_content")
setCookieWithValue(30, "utm_landing", "https://get.likeup.me")
