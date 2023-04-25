function registrar(elemento){
  var username = elemento.children.username.value
  var password = elemento.children.password.value
  var passwordConfirmation = elemento.children.passwordConfirmation.value

  if(password === passwordConfirmation){
    alert("Usuario " + username + " Registrado!")
  }else{
    alert (' Usuario' + username + ' Não Registrado!')
  }
}