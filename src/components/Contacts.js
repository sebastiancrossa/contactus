import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

    // State should always be at the top
    state = {
        contacts: [
            {
                id: 1,
                name: 'Sebastian Crossa',
                email: 'crossasebastian@gmail.com',
                phoneNumber: '6677559877'
            },
            {
                id: 2,
                name: 'Jeremy Buttons',
                email: 'jbuttons@gmail.com',
                phoneNumber: '667482912'
            },
            {
                id: 3,
                name: 'Berry Olson',
                email: 'bolson@gmail.com',
                phoneNumber: '6442448144'
            },
        ]
    }

    deleteContact = id => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        });
    }


    render() {
        const { contacts } = this.state;

        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Contacts;
