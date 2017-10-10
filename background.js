chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
      bounds: {
        width: 1024,
        height: 700
      },
      alwaysOnTop: true,
      state: 'normal',
      frame: 'none'
  });
});