safari.application.addEventListener('message', function(e) {
  var data, id, password;
  id = safari.extension.settings.getItem('id');
  password = safari.extension.secureSettings.getItem('password');
  data = {
    id: id,
    password: password
  };
  e.target.page.dispatchMessage('Response', data);
  return safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('Response', data);
}, false);
safari.self.tab.dispatchMessage('URL', location.href);