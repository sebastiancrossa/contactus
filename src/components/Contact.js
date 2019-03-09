import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../context';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    }

    render() {
        const { id, name, email, phoneNumber } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-3 ml-3 mr-3">
                            <h4>{name}
                                <i
                                    onClick={() => this.setState({ showContactInfo: !showContactInfo })} className="fas fa-sort-down" style={{ cursor: 'pointer' }} />

                                <i
                                    className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                />
                            </h4>

                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">{email}</li>
                                <li className="list-group-item">{phoneNumber}</li>
                            </ul>) : null}

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.defaultProps = {
    name: 'Name here',
    email: 'Email here',
    phoneNumber: 'Phone Number here'
};

Contact.propType = {
    contact: PropTypes.object.isRequired
};

export default Contact;