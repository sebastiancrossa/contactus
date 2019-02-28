import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { branding } = props;

    return (
        <div>
            <h1 style={headingStyle}>{branding}</h1>
        </div>
    );
};

// Styling
const headingStyle = {
    color: 'red',
    margin: '20px',
    fontSize: '28px'
};


// Prop Settings
Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
