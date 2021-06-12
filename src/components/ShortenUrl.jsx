import React from 'react';
import PropTypes from 'prop-types';

const ShortenUrl = ({ url }) => url && (
    <div className="cut-url">
        <p>Shorten Url:</p>
        <p className="cut-url__link">{url}</p>
    </div>
);

ShortenUrl.propTypes = {
    url: PropTypes.string.isRequired,
};

export default ShortenUrl;
