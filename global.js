safari.application.addEventListener('message', function(e) {
  var data, id, password;
  id = safari.extention.settings.getItem('id');
  password = safari.extention.secureSettings.getItem('password');
  data = {
    id: id,
    password: password
  };
  e.target.page.dispatchMessage('Response', data);
  safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('Response', data);
  return console.log(id);
}, false);
safari.self.tab.dispatchMessage('URL', location.href);