const { Provider, connect } = require('react-redux');

module.exports = {
	Provider,

	connect(mapStateToProps, mapDispatchToProps) {
		const actions = mapDispatchToProps && createActions(mapDispatchToProps);
		return connect(mapStateToProps, actions);
	}
};

function createActions(transform) {
	const actions = {};
	for (const name in transform) {
		actions[name] = createAction(transform[name]);
	}
	return actions;
}

function createAction(transform) {
	return function(...args) {
		return state => transform(state, ...args);
	};
}