chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    code: 'document.addEventListener("mousemove", function(e) { chrome.runtime.sendMessage({action: "captureColor", color: getPixelColor(e.clientX, e.clientY)}); });' +
      'function getPixelColor(x, y) { var canvas = document.createElement("canvas"); var ctx = canvas.getContext("2d"); ctx.getImageData(x, y, 1, 1); var pixelData = ctx.getImageData(x, y, 1, 1).data; return "rgb(" + pixelData[0] + ", " + pixelData[1] + ", " + pixelData[2] + ")"; }'
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "captureColor") {
    console.log("Cor capturada: " + request.color);
    // Faça o que desejar com a cor capturada
  }
});
