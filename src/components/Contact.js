import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3 ml-3 mr-3">
                <h4>{contact.name} <i onClick={() => this.setState({ showContactInfo: !showContactInfo })} className="fas fa-sort-down" /></h4>

                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">{contact.email}</li>
                    <li className="list-group-item">{contact.phoneNumber}</li>
                </ul>) : null}

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
    contact: PropTypes.object.isRequired
};

export default Contact;