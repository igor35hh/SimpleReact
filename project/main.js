 var contacts = [
        {key: 1, name: "Igor", email: "igor@gmail.com", description: "developer"},
        {key: 2, name: "Irina", email: "irina@gmail.com"},
        {key: 3, name: "Jan", email: "jan@gmail.com"},
        {key: 4, name: "Dan"}
   	]

var newContact = {name: "", email: "", description: "", errors: null};

function updateNewContact(contact) {
	setState({ newContact: contact });
}

function submitNewContact() {
	var contact = Object.assign({}, state.newContact, {key: state.contacts.length+1, errors: {}});

	if (!contact.name) {
		contact.errors.name = ["Please enter your new contact's name"];
	}

	if (!/.+@.+\..+/.test(contact.email)) {
		contact.errors.email = ["Please enter your new contact's email"];	
	}

	setState(Object.keys(contact.errors).length===0 
		? { newContact: Object.assign({}, newContact), contacts: state.contacts.slice(0).concat(contact), }
		:{ newContact: contact }
	);
}

var state = {};

function setState(changes) {
	Object.assign(state, changes);

	ReactDOM.render(
		React.createElement(ContactView, Object.assign({}, state, {
			onNewContactChange: updateNewContact,
			onNewContactSubmit: submitNewContact,
		})), 
		document.getElementById('react-app')
	);

}

setState({
	contacts: contacts, 
	newContact: Object.assign({}, newContact),
});