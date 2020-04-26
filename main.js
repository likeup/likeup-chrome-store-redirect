
function setReferralCookie(exdays) {
  var d = new Date();
  var url = new URL(window.location.href);
  var referer_username = url.searchParams.get("ref_username");
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "ref_username=" + referer_username + ";" + expires + ";domain=likeup.me";
}

setReferralCookie(14)
