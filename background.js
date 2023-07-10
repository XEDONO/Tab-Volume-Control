chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.includes("spankbang.com")) {
    chrome.tabs.executeScript(tabId, {
      code: `
        var video = document.querySelector("video");
        if (video) {
          video.volume = 0.1;
        }
      `
    });
  }
});

chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.url.includes("spankbang.com")) {
    chrome.tabs.executeScript(tab.id, {
      code: `
        var video = document.querySelector("video");
        if (video) {
          video.volume = 0.1;
        }
      `
    });
  }
});

chrome.tabs.query({ url: "*://*.spankbang.com/*" }, function(tabs) {
  tabs.forEach(function(tab) {
    chrome.tabs.executeScript(tab.id, {
      code: `
        var video = document.querySelector("video");
        if (video) {
          video.volume = 0.1;
        }
      `
    });
  });
});
