function register(ev){
    console.log(ev)
    var sectionElement = ev.currentTarget.parentNode
    var username = sectionElement.children.username.value
    var password = sectionElement.children.password.velue
    var passwordConfirmation = sectionElement.children.passwordConfirmation.value


    if(password === passwordConfirmation){
        alert('O Usuario '+ username + 'registrado')
    }else{
        alert('As senhas nao conferem!')
    }
}



var button = document.getElementById('register-button')

    button.addEventListener('click',register)

    function removeListener(){
        button.removeEventListener('click',register)
        alert('event removed')
    }
    button.addEventListener('mouseover', function(ev){
        console.log(ev.currentTarget)
    })