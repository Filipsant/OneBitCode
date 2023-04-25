function addContact() {
    var contactSection = document.getElementById('contacts-list')

    var h3 = document.createElement('h3')
    h3.innerText = "Contato"

    var ul = document.createElement('ul')

    var nameli = document.createElement('li')
    nameli.innerText = "Nome:"

    var nameInput = document.createElement ('input')
    nameInput.type = 'text'
    nameInput.name = 'nome completo'
    nameli.appendChild(nameInput)
    ul.appendChild(nameli)

    var phoneli = document.createElement('li')
    phoneli.innerText = "Telefone:"

    var phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'Phone'
    phoneli.appendChild(phoneInput)
    ul.appendChild(phoneli)

    var addressli = document.createElement('li')
    addressli.innerHTML = '<label for="address">Endereço: </label>'
    var addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressli.appendChild(addressInput)
    ul.appendChild(addressli)

   contactSection.append(h3, ul)
}

function removeContact(){
    var contactSection = document.getElementById('contacts-list')

    var titulos = document.getElementsByTagName('h3')
    var contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titulos[titulos.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}