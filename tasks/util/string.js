function isEmpty(path) {
	return !path || path.trim().length === 0;
}

module.exports = {
	isEmpty: isEmpty
};