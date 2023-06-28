document.addEventListener("DOMContentLoaded", function () {
  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
      code: 'chrome.runtime.sendMessage({action: "captureColor"});'
    });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "captureColor") {
    console.log("Capturando cor...");
  }
});

console.log('working');