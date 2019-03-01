import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

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


    render() {
        const { contacts } = this.state;

        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Contacts;
