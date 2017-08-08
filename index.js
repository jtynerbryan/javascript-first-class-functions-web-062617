function receivesAFunction(callback) {
	return callback();
};

function name() {
	console.log("Name");
};

function returnsANamedFunction() {
	return name;
};

function returnsAnAnonymousFunction() {
	return () => console.log("Hey Jesse");
};