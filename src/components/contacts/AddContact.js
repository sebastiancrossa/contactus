import React, { Component } from 'react';
import { Consumer } from '../../context';

import TextInputGroup from '../layout/TextInputGroup'

import UUID from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phoneNumber: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (dispatch, e) => {
        e.preventDefault(); // prevents JS from submiting to a file

        const { name, email, phoneNumber } = this.state;

        const newContact = {
            id: UUID(),
            name,
            email,
            phoneNumber
        };

        dispatch({ type: 'ADD_CONTACT', payload: newContact });

        // Will clear the state after submiting a new contact
        this.setState({
            name: '',
            email: '',
            phoneNumber: ''
        });
    }

    render() {
        const { name, email, phoneNumber } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3 ml-3 mr-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        value={name}
                                        placeholder="Enter name..."
                                        onChange={this.onChange}
                                    />

                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        value={email}
                                        type="email"
                                        placeholder="Enter email..."
                                        onChange={this.onChange}
                                    />

                                    <TextInputGroup
                                        label="Phone"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        type="tel"
                                        placeholder="Enter phone number..."
                                        onChange={this.onChange}
                                    />

                                    <input type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block" />

                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default AddContact;
