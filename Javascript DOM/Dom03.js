function addInput(){
    var ul = document.getElementById('inputs')

    var newLi = document.createElement('li')
    newLi.innerText ='Novo input:'

    var newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}