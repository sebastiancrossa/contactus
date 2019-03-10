import React, { Component } from 'react';
import { Consumer } from '../../context';

import TextInputGroup from '../layout/TextInputGroup'

import UUID from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phoneNumber: '',
        errors: {
            name: 'Name is required',
            email: 'Email is required',
            phoneNumber: 'Phone number is required'
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (dispatch, e) => {
        e.preventDefault(); // prevents JS from submiting to a file

        const { name, email, phoneNumber } = this.state;

        // MARK : ERROR CHECK
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }

        if (phoneNumber === '') {
            this.setState({ errors: { phone: 'Name is required' } });
            return;
        }
        // MARK : END ERROR CHECK

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
            phoneNumber: '',
            errors: {}
        });
    }

    render() {
        const { name, email, phoneNumber, errors } = this.state;

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
                                        error={errors.name}
                                    />

                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        value={email}
                                        type="email"
                                        placeholder="Enter email..."
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />

                                    <TextInputGroup
                                        label="Phone"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        type="tel"
                                        placeholder="Enter phone number..."
                                        onChange={this.onChange}
                                        error={errors.phoneNumber}
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