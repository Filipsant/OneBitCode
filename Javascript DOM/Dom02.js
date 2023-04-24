function show(){
    var contactList = document.getElementById('contact-list')
    console.log(contactList)

    var listElements = document.getElementsByTagName('li')
    console.log(listElements)

    var contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    var contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    var contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    var firstcontact = document.querySelector('#contact-list > li > label ')
    console.log(firstcontact)

}