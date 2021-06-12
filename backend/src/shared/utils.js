function appendPrefix(input, prefix) {
    if (input.substr(0, prefix.length) !== prefix) {
        return `${prefix}${input}`;
    }
    return input;
}

module.exports = {
    appendPrefix,
};
