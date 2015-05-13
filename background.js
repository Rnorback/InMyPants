function click(tab) {
  chrome.tabs.executeScript(null,
    {file: "content.js"});
}

chrome.browserAction.onClicked.addListener(click);