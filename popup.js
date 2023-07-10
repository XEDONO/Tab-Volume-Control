document.addEventListener("DOMContentLoaded", function() {
    var volumeButton = document.getElementById("volumeButton");
    volumeButton.addEventListener("click", function() {
      chrome.tabs.executeScript({
        code: `
          var video = document.querySelector("video");
          if (video) {
            video.volume = 0.1;
          }
        `
      });
    });
  });
  