
function setCookie(exdays, name) {
  var d = new Date();
  var url = new URL(window.location.href);
  var value = url.searchParams.get(name);
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";domain=likeup.me";
}

setCookie(30, "ref_username")
setCookie(30, "utm_source")
setCookie(30, "utm_campaign")
setCookie(30, "utm_medium")
