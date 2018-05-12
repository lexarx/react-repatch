# React Repatch

React bindings for [Repatch](https://github.com/jaystack/repatch).

## Examples

```js
import { connect } from 'react-repatch'

const Counter = ({ counter, increment }) => [
	<p>Counter value: {counter}</p>,
	<button onClick={() => increment(5)}>Add 5</button>
];

const increment = (state, amount) => ({
	...state,
	counter: state.counter + amount
});

export default connect(state => ({
	counter: state.counter
}), {
	increment
})(Counter);
```

## Installation

```sh
npm install --save react-repatch
```