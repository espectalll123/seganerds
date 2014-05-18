chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    bounds: {
      width: 1024,
      height: 768,
    },
    minWidth: 730,
    minHeight: 600,
    frame: 'none'
  });
});