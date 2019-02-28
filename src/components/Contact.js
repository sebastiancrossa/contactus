import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    render() {
        const { name, email, phoneNumber } = this.props;

        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>{email}</li>
                    <li>{phoneNumber}</li>
                </ul>
            </div>
        )
    }
}

Contact.defaultProps = {
    name: 'Name here',
    email: 'Email here',
    phoneNumber: 'Phone Number here'
};

Contact.propType = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
};

export default Contact;