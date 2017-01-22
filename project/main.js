 var contacts = [
        {key: 1, name: "Igor", email: "igor@gmail.com", description: "developer"},
        {key: 2, name: "Irina", email: "irina@gmail.com"},
        {key: 3, name: "Jan", email: "jan@gmail.com"},
        {key: 4, name: "Dan"}
   	]

var newContact = {name: "", email: "", description: ""}

ReactDOM.render(
	React.createElement(ContactView, {contacts: contacts, newContact: newContact}), 
	document.getElementById('react-app')
)