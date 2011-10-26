safari.application.addEventListener 'message', (e) ->
  id = safari.extention.settings.getItem 'id'
  password = safari.extention.secureSettings.getItem 'password'
  data = { id : id, password : password }
  e.target.page.dispatchMessage 'Response', data
  safari.application.activeBrowserWindow.activeTab.page.dispatchMessage 'Response', data
  console.log id
, false
safari.self.tab.dispatchMessage 'URL', location.href
