$(function() {
  var $form, $id, $password;
  $form = $("form[name='Login']");
  $id = $form.find("input[name='uid']");
  $password = $form.find("input[name='pwd']");
  safari.self.addEventListener('message', function(e) {
    var id, password;
    console.log("hoge");
    id = e.message['id'];
    password = e.message['password'];
    $id.val(id);
    $password.val(password);
    return $form.submit;
  }, false);
  return safari.self.tab.dispatchMessage('URL', location.href);
});