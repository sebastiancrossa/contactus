import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3 ml-3 mr-3">
                <h4>{contact.name}
                    <i
                        onClick={() => this.setState({ showContactInfo: !showContactInfo })} className="fas fa-sort-down" style={{ cursor: 'pointer' }} />

                    <i
                        className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                        onClick={this.onDeleteClick}
                    />
                </h4>

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
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;