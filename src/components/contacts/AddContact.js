import React, { Component } from 'react';
import { Consumer } from '../../context';
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
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text"
                                            name="name"
                                            className="form-control form-control-lg"
                                            placeholder="Enter name..."
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="Email"
                                            name="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter email..."
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel"
                                            name="phoneNumber"
                                            className="form-control form-control-lg"
                                            placeholder="Enter phone..."
                                            value={phoneNumber}
                                            onChange={this.onChange}
                                        />
                                    </div>

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
