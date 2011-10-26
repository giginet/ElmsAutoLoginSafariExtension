$ ->
  $form     = $ "form[name='Login']"
  $id       = $form.find "input[name='uid']"
  $password = $form.find "input[name='pwd']"
  safari.self.addEventListener 'message', (e) ->
    console.log("hoge")
    id = e.message['id']
    password = e.message['password']
    $id.val id
    $password.val password
    $form.submit
  , false
  safari.self.tab.dispatchMessage 'URL', location.href
