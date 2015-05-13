var tweets = document.getElementsByClassName("ProfileTweet-text");

for (var i = 0; i < tweets.length; ++i) {
  var children = tweets[i].childNodes;
  for (var j = 0; j < children.length; ++j) {
    var child = children[j];
    if (child.nodeType == child.TEXT_NODE) {
      child.textContent = child.textContent.replace(/([.?!:])/g, " in my pants\$1");
    }
  }
}




// var tweets = document.getElementsByClassName("ProfileTweet-text");

// for (var i = 0; i < tweets.length; ++i) {
//   var html = tweets[i].innerHTML;
//   console.log(html)
//   html = html.replace(/([.?!:])/g, " in my pants\$1");
//   //html = html.replace(/([.?!:])/g, " in my pants\$1");
//   //html = html.replace(/[A-Z]+[a-z]*([ !,.:]?)/g, "Bacon\$1");
//   //tweets[i].innerHTML = html;
// }