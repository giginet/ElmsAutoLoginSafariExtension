$(function(){
  var $form = $("form[name='Login']");
  var $id = $form.find("input[name='uid']");
  var $password = $form.find("input[name='pwd']");
  safari.self.addEventListener('message', function(evt){
    var id = evt.message['id'];
    var password = evt.message['password'];
    $id.val(id);
    $password.val(password);
    $form.submit();
  },false);
  safari.self.tab.dispatchMessage('URL',location.href);
});
