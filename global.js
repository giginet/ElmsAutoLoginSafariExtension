safari.application.addEventListener('message', function(evt){
  var id = safari.extension.settings.getItem('id');
  var password = safari.extension.secureSettings.getItem('password');
  var data = evt.message;
  var custom_data = {'id' : id, 'password' : password};
  evt.target.page.dispatchMessage('Response', custom_data);
  safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('Response', custom_data);
},false);
safari.self.tab.dispatchMessage('URL', location.href);
