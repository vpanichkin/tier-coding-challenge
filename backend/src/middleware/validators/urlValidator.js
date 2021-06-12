const { body } = require('express-validator');

const urlValidation = () => [
    body('url')
        .isURL(),
];

module.exports = urlValidation;
