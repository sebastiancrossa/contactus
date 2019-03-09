import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }

        default:
            return state;
    }
};

export class Provider extends Component {
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
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
// We want to be able to use Consumer instead of Context.Consumer